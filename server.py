import os
import re
import shutil
import atexit
import json
import asyncio
from typing import List, Dict
import yaml
import numpy as np
from fastapi import FastAPI, WebSocket, APIRouter
from fastapi.responses import RedirectResponse
from fastapi.staticfiles import StaticFiles
from starlette.websockets import WebSocketDisconnect
from module.openllm_vtuber_main import OpenLLMVTuberMain
from module.live2d_model import Live2dModel
from tts.stream_audio import AudioPayloadPreparer


class WebSocketServer:
    """
    WebSocketServer initializes a FastAPI application with WebSocket endpoints and a broadcast endpoint.

    Attributes:
        config (dict): Configuration dictionary.
        app (FastAPI): FastAPI application instance.
        router (APIRouter): APIRouter instance for routing.
        connected_clients (List[WebSocket]): List of connected WebSocket clients for "/client-ws".
        server_ws_clients (List[WebSocket]): List of connected WebSocket clients for "/server-ws".
    """

    def __init__(self, open_llm_vtuber_config: Dict | None = None, web : bool = False):
        """
        Initializes the WebSocketServer with the given configuration.
        """
        self.app = FastAPI()
        self.router = APIRouter()
        self.new_connected_clients: List[WebSocket] = []
        self.connected_clients: List[WebSocket] = []
        self.server_ws_clients: List[WebSocket] = []
        self.open_llm_vtuber: OpenLLMVTuberMain | None = None
        self.open_llm_vtuber_config: Dict | None = open_llm_vtuber_config
        self._setup_routes()
        if web:
            self._mount_static_files()
        self.app.include_router(self.router)

    def _setup_routes(self):
        """Sets up the WebSocket and broadcast routes."""

        # the connection between this server and the frontend client
        # The version 2 of the client-ws. Introduces breaking changes.
        # This route will initiate its own main.py instance and conversation loop
        @self.app.get("/")
        async def redirect_root():
            return RedirectResponse(url="/web.html")

        @self.app.websocket("/client-ws")
        async def websocket_endpoint(websocket: WebSocket):
            await websocket.accept()
            await websocket.send_text(
                json.dumps({"type": "full-text", "text": "Connection established"})
            )

            self.connected_clients.append(websocket)
            print("Connection established")
            l2d = Live2dModel(self.open_llm_vtuber_config["LIVE2D_MODEL"])
            open_llm_vtuber = OpenLLMVTuberMain(self.open_llm_vtuber_config)
            audio_payload_preparer = AudioPayloadPreparer()

            def _play_audio_file(sentence: str | None, filepath: str | None, instrument_filepath : str | None = None) -> None:
                if filepath is None:
                    print("No audio to be streamed. Response is empty.")
                    return

                if sentence is None:
                    sentence = ""
                print(f">> Playing {filepath}...")

                payload, duration = audio_payload_preparer.prepare_audio_payload(
                    audio_path=filepath,
                    instrument_path=instrument_filepath,
                    display_text=sentence,
                    expression_list=l2d.extract_emotion(sentence),
                )
                print("Payload send.")

                async def _send_audio():
                    await websocket.send_text(json.dumps(payload))
                    await asyncio.sleep(duration)

                new_loop = asyncio.new_event_loop()
                asyncio.set_event_loop(new_loop)
                new_loop.run_until_complete(_send_audio())
                new_loop.close()

                print("Audio played.")

            open_llm_vtuber.set_audio_output_func(_play_audio_file)

            await websocket.send_text(
                json.dumps({"type": "set-model", "text": l2d.model_info})
            )
            print("Model set")
            received_data_buffer = np.array([])
            # start mic
            await websocket.send_text(
                json.dumps({"type": "control", "text": "start-mic"})
            )

            conversation_task = None

            try:
                while True:
                    print(".", end="")
                    message = await websocket.receive_text()
                    data = json.loads(message)
                    # print(f"\033\n Received ws req: {data.get('type')}\033[0m\n")

                    if data.get("type") == "interrupt-signal":
                        print("Start receiving audio data from front end.")
                        if conversation_task is not None:
                            print(
                                "\033[91mLLM hadn't finish itself. Interrupting it...",
                                "heard response: \n",
                                data.get("text"),
                                "\033[0m\n",
                            )
                            open_llm_vtuber.interrupt(data.get("text"))
                            # conversation_task.cancel()

                    elif data.get("type") == "mic-audio-data":
                        received_data_buffer = np.append(
                            received_data_buffer,
                            np.array(
                                list(data.get("audio").values()), dtype=np.float32
                            ),
                        )
                        print("*", end="")

                    elif data.get("type") == "mic-audio-end":
                        print("Received audio data end from front end.")
                        await websocket.send_text(
                            json.dumps({"type": "full-text", "text": "Thinking..."})
                        )
                        audio = received_data_buffer
                        received_data_buffer = np.array([])

                        async def _run_conversation():
                            try:
                                await websocket.send_text(
                                    json.dumps(
                                        {
                                            "type": "control",
                                            "text": "conversation-chain-start",
                                        }
                                    )
                                )
                                await asyncio.to_thread(
                                    open_llm_vtuber.conversation_chain,
                                    user_input=audio,
                                )
                                await websocket.send_text(
                                    json.dumps(
                                        {
                                            "type": "control",
                                            "text": "conversation-chain-end",
                                        }
                                    )
                                )
                                print("One Conversation Loop Completed")
                            except asyncio.CancelledError:
                                print("Conversation task was cancelled.")
                            except InterruptedError as e:
                                print(f"Conversation was interrupted. {e}")

                        conversation_task = asyncio.create_task(_run_conversation())
                    else:
                        print("Unknown data type received.")

            except WebSocketDisconnect:
                self.connected_clients.remove(websocket)
                open_llm_vtuber = None

    def _mount_static_files(self):
        """Mounts static file directories."""
        self.app.mount("/", StaticFiles(directory="./static", html=True), name="static")
        pass

    # def run(self, host: str = "127.0.0.1", port: int = 8000, log_level: str = "info"):
    #     """Runs the FastAPI application using Uvicorn."""
    #     import uvicorn

    #     uvicorn.run(self.app, host=host, port=port, log_level=log_level)

    def run(self, host: str = "127.0.0.1", port: int = 8000, log_level: str = "info"):
        """Runs the FastAPI application using Uvicorn."""
        import uvicorn

        uvicorn.run(self.app, host=host, port=port, log_level=log_level)

    def clean_cache():
        cache_dir = "./cache"
        if os.path.exists(cache_dir):
            shutil.rmtree(cache_dir)
            os.makedirs(cache_dir)

def load_config_with_env(path) -> dict:
    """
    Load the configuration file with environment variables.

    Parameters:
    - path (str): The path to the configuration file.

    Returns:
    - dict: The configuration dictionary.

    Raises:
    - FileNotFoundError if the configuration file is not found.
    - yaml.YAMLError if the configuration file is not a valid YAML file.
    """
    with open(path, "r", encoding="utf-8") as file:
        content = file.read()

    # Match ${VAR_NAME}
    pattern = re.compile(r"\$\{(\w+)\}")

    # replace ${VAR_NAME} with os.getenv('VAR_NAME')
    def replacer(match):
        env_var = match.group(1)
        return os.getenv(
            env_var, match.group(0)
        )  # return the original string if the env var is not found

    content = pattern.sub(replacer, content)

    # Load the yaml file
    return yaml.safe_load(content)

import argparse
if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="")
    parser.add_argument("--web", action="store_true", help="Web mode")
    args = parser.parse_args()

    atexit.register(WebSocketServer.clean_cache)
    
    # Load configurations from yaml file
    config = load_config_with_env("conf.yaml")

    config["LIVE2D"] = True  # make sure the live2d is enabled
    
    # Initialize and run the WebSocket server
    server = WebSocketServer(open_llm_vtuber_config=config, web=args.web)
    server.run(host=config["HOST"], port=config["PORT"])

