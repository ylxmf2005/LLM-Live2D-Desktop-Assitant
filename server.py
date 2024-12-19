import os
import re
import shutil
import atexit
import json
import asyncio
from typing import List, Dict, Any
import yaml
import numpy as np
import chardet
from loguru import logger
from fastapi import FastAPI, WebSocket, APIRouter
from fastapi.staticfiles import StaticFiles
from starlette.middleware.cors import CORSMiddleware 
from starlette.websockets import WebSocketDisconnect
from main import OpenLLMVTuberMain
from live2d_model import Live2dModel
from tts.stream_audio import AudioPayloadPreparer
import __init__


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

    def __init__(self, open_llm_vtuber_main_config: Dict | None = None):
        """
        Initializes the WebSocketServer with the given configuration.
        """
        logger.info(f"t41372/Open-LLM-VTuber, version {__init__.__version__}")
        self.app = FastAPI()
        # Add CORS middleware
        self.app.add_middleware(
            CORSMiddleware,
            allow_origins=["*"],
            allow_credentials=True,
            allow_methods=["*"],
            allow_headers=["*"],
        )
        self.router = APIRouter()
        self.connected_clients: List[WebSocket] = []
        
        
        self.open_llm_vtuber_main_config = open_llm_vtuber_main_config

        # Initialize model manager
        self.preload_models = self.open_llm_vtuber_main_config.get("SERVER", {}).get(
            "PRELOAD_MODELS", False
        )
        if self.preload_models:
            logger.info("Preloading ASR and TTS models...")
            logger.info(
                "Using: " + str(self.open_llm_vtuber_main_config.get("ASR_MODEL"))
            )
            logger.info(
                "Using: " + str(self.open_llm_vtuber_main_config.get("TTS_MODEL"))
            )

            self.model_manager = ModelManager(self.open_llm_vtuber_main_config)
            self.model_manager.initialize_models()

        self._setup_routes()
        self._mount_static_files()
        self.app.include_router(self.router)

    async def _handle_config_switch(
        self, websocket: WebSocket, config_file: str
    ) -> tuple[Live2dModel, OpenLLMVTuberMain] | None:
        """处理配置切换，返回新的组件实例"""
        new_config = self._load_config_from_file(config_file)
        if new_config:
            try:
                # 更新模型缓存
                if self.preload_models:
                    self.model_manager.update_models(new_config)

                # 更新当前配置
                self.open_llm_vtuber_main_config.update(new_config)

                # 重新初始化组件
                l2d, open_llm_vtuber, _ = self._initialize_components(websocket)

                await websocket.send_text(
                    json.dumps(
                        {
                            "type": "config-switched",
                            "message": f"Switched to config: {config_file}",
                        }
                    )
                )
                await websocket.send_text(
                    json.dumps({"type": "set-model", "text": l2d.model_info})
                )
                logger.info(f"Configuration switched to {config_file}")

                return l2d, open_llm_vtuber

            except Exception as e:
                logger.error(f"Error switching configuration: {e}")
                await websocket.send_text(
                    json.dumps(
                        {
                            "type": "error",
                            "message": f"Error switching configuration: {str(e)}",
                        }
                    )
                )
                return None
        return None

    def _initialize_components(
        self, websocket: WebSocket
    ) -> tuple[Live2dModel, OpenLLMVTuberMain, AudioPayloadPreparer]:
        """Initialize or reinitialize components with current configuration."""
        l2d = Live2dModel(self.open_llm_vtuber_main_config["LIVE2D_MODEL"])

        # Use cached models if available
        custom_asr = (
            self.model_manager.cache.get("asr") if self.preload_models else None
        )
        custom_tts = (
            self.model_manager.cache.get("tts") if self.preload_models else None
        )

        open_llm_vtuber = OpenLLMVTuberMain(
            self.open_llm_vtuber_main_config,
            custom_asr=custom_asr,
            custom_tts=custom_tts,
        )

        audio_preparer = AudioPayloadPreparer()

        # Set up the audio playback function
        def _websocket_audio_handler(
            sentence: str | None, filepath: str | None
        ) -> None:
            if filepath is None:
                logger.info("No audio to be streamed. Response is empty.")
                return

            if sentence is None:
                sentence = ""

            logger.info(f"Playing {filepath}...")
            payload, duration = audio_preparer.prepare_audio_payload(
                audio_path=filepath,
                display_text=sentence,
                expression_list=l2d.extract_emotion(sentence),
            )
            logger.info("Payload prepared")

            async def _send_audio():
                await websocket.send_text(json.dumps(payload))
                await asyncio.sleep(duration)

            new_loop = asyncio.new_event_loop()
            asyncio.set_event_loop(new_loop)
            new_loop.run_until_complete(_send_audio())
            new_loop.close()

            logger.info("Audio played")

        open_llm_vtuber.set_audio_output_func(_websocket_audio_handler)
        return l2d, open_llm_vtuber, audio_preparer

    def _setup_routes(self):
        """Sets up the WebSocket and broadcast routes."""

        # the connection between this server and the frontend client
        # The version 2 of the client-ws. Introduces breaking changes.
        # This route will initiate its own main.py instance and conversation loop
        @self.app.websocket("/client-ws")
        async def websocket_endpoint(websocket: WebSocket):
            await websocket.accept()
            await websocket.send_text(
                json.dumps({"type": "full-text", "text": "Connection established"})
            )

            self.connected_clients.append(websocket)
            print("Connection established")

            # Initialize components
            l2d, open_llm_vtuber, _ = self._initialize_components(websocket)

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

                    elif (
                        data.get("type") == "mic-audio-end"
                        or data.get("type") == "text-input"
                    ):
                        print("Received audio data end from front end.")
                        await websocket.send_text(
                            json.dumps({"type": "full-text", "text": "Thinking..."})
                        )
                        if data.get("type") == "text-input":
                            user_input = data.get("text")
                        else:
                            user_input: np.ndarray | str = received_data_buffer

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
                                    user_input=user_input,
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
                                print(f"😢Conversation was interrupted. {e}")

                        conversation_task = asyncio.create_task(_run_conversation())
                    elif data.get("type") == "fetch-configs":
                        config_files = self._scan_config_alts_directory()
                        await websocket.send_text(
                            json.dumps({"type": "config-files", "files": config_files})
                        )
                    elif data.get("type") == "switch-config":
                        config_file = data.get("file")
                        if config_file:
                            result = await self._handle_config_switch(
                                websocket, config_file
                            )
                            if result:
                                l2d, open_llm_vtuber = result

                    elif data.get("type") == "fetch-backgrounds":
                        bg_files = self._scan_bg_directory()
                        await websocket.send_text(
                            json.dumps({"type": "background-files", "files": bg_files})
                        )
                    else:
                        print("Unknown data type received.")

            except WebSocketDisconnect:
                self.connected_clients.remove(websocket)
                open_llm_vtuber = None

    def _scan_config_alts_directory(self) -> List[str]:
        config_files = ["conf.yaml"]  # default config file
        config_alts_dir = self.open_llm_vtuber_main_config.get(
            "CONFIG_ALTS_DIR", "config_alts"
        )
        for root, _, files in os.walk(config_alts_dir):
            for file in files:
                if file.endswith(".yaml"):
                    config_files.append(file)
        return config_files

    def _load_config_from_file(self, filename: str) -> Dict:
        """
        Load configuration from a YAML file with robust encoding handling.

        Args:
            filename: Name of the config file

        Returns:
            Dict: Loaded configuration or None if loading fails
        """
        if filename == "conf.yaml":
            return load_config_with_env("conf.yaml")

        config_alts_dir = self.open_llm_vtuber_main_config.get(
            "CONFIG_ALTS_DIR", "config_alts"
        )
        file_path = os.path.join(config_alts_dir, filename)

        if not os.path.exists(file_path):
            logger.error(f"Config file not found: {file_path}")
            return None

        # Try common encodings first
        encodings = ["utf-8", "utf-8-sig", "gbk", "gb2312", "ascii"]
        content = None

        for encoding in encodings:
            try:
                with open(file_path, "r", encoding=encoding) as file:
                    content = file.read()
                    break
            except UnicodeDecodeError:
                continue

        if content is None:
            # Try detecting encoding as last resort
            try:
                with open(file_path, "rb") as file:
                    raw_data = file.read()
                detected = chardet.detect(raw_data)
                if detected["encoding"]:
                    content = raw_data.decode(detected["encoding"])
            except Exception as e:
                logger.error(
                    f"Error detecting encoding for config file {file_path}: {e}"
                )
                return None

        try:
            return yaml.safe_load(content)
        except yaml.YAMLError as e:
            logger.error(f"Error parsing YAML from {file_path}: {e}")
            return None

    def _scan_bg_directory(self) -> List[str]:
        bg_files = []
        bg_dir = os.path.join("static", "bg")
        for root, _, files in os.walk(bg_dir):
            for file in files:
                if file.endswith((".jpg", ".jpeg", ".png", ".gif")):
                    bg_files.append(file)
        return bg_files

    def _mount_static_files(self):
        """Mounts static file directories."""
        self.app.mount(
            "/live2d-models",
            StaticFiles(directory="live2d-models"),
            name="live2d-models",
        )
        self.app.mount("/", StaticFiles(directory="./static", html=True), name="static")

    def run(self, host: str = "127.0.0.1", port: int = 8000, log_level: str = "info"):
        """Runs the FastAPI application using Uvicorn."""
        import uvicorn

        uvicorn.run(self.app, host=host, port=port, log_level=log_level)

    @staticmethod
    def clean_cache():
        """Clean the cache directory by removing and recreating it."""
        cache_dir = "./cache"
        if os.path.exists(cache_dir):
            shutil.rmtree(cache_dir)
            os.makedirs(cache_dir)

    def clean_up(self):
        """Clean up resources before shutting down"""
        self.clean_cache()
        # Clear model cache
        self.model_manager.cache.clear()


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


class ModelCache:
    """Manager for caching ASR and TTS models"""

    def __init__(self):
        self._cache: Dict[str, Any] = {}

    def get(self, key: str) -> Any:
        """get the cached model"""
        return self._cache.get(key)

    def set(self, key: str, model: Any) -> None:
        """set the cached model"""
        self._cache[key] = model

    def remove(self, key: str) -> None:
        """remove the cached model"""
        self._cache.pop(key, None)

    def clear(self) -> None:
        """clear the cache"""
        self._cache.clear()


class ModelManager:
    """Manager for ASR and TTS models"""

    def __init__(self, config: Dict):
        self.config = config
        self._old_config = config.copy()  # save a copy of the initial config
        self.cache = ModelCache()

    def initialize_models(self) -> None:
        """Initialize ASR and TTS models"""
        if self.config.get("VOICE_INPUT_ON", False):
            self._init_asr()
        if self.config.get("TTS_ON", False):
            self._init_tts()

    def _init_asr(self) -> None:
        """Initialize ASR model"""
        from asr.asr_factory import ASRFactory

        asr_model = self.config.get("ASR_MODEL")
        asr_config = self.config.get(asr_model, {})
        self.cache.set("asr", ASRFactory.get_asr_system(asr_model, **asr_config))
        logger.info(f"ASR model {asr_model} loaded successfully")

    def _init_tts(self) -> None:
        """Initialize TTS model"""
        from tts.tts_factory import TTSFactory

        tts_model = self.config.get("TTS_MODEL")
        tts_config = self.config.get(tts_model, {})
        self.cache.set("tts", TTSFactory.get_tts_engine(tts_model, **tts_config))
        logger.info(f"TTS model {tts_model} loaded successfully")

    def update_models(self, new_config: Dict) -> None:
        """Update ASR and TTS models based on new configuration"""
        try:
            # make sure old config is saved
            if not hasattr(self, "_old_config"):
                self._old_config = self.config.copy()

            # check if ASR or TTS models need to be reinitialized
            if self._should_reinit_asr(new_config):
                self.config = new_config  # update current config
                self._update_asr()
            if self._should_reinit_tts(new_config):
                self.config = new_config  # update current config
                self._update_tts()

            self._old_config = new_config.copy()
            self.config = new_config

        except Exception as e:
            logger.error(f"Error during model update: {e}")
            raise

    def _should_reinit_asr(self, new_config: Dict) -> bool:
        """check if ASR model needs to be reinitialized"""
        if self._old_config.get("VOICE_INPUT_ON") != new_config.get("VOICE_INPUT_ON"):
            return True

        old_model = self._old_config.get("ASR_MODEL")
        new_model = new_config.get("ASR_MODEL")
        if old_model != new_model:
            return True

        # if model is the same, check if any settings have changed
        if old_model:
            old_model_config = self._old_config.get(old_model, {})
            new_model_config = new_config.get(old_model, {})

            if old_model_config != new_model_config:
                logger.info(f"ASR model {old_model} settings changed")
                for key in set(old_model_config.keys()) | set(new_model_config.keys()):
                    if old_model_config.get(key) != new_model_config.get(key):
                        logger.debug(
                            f"ASR setting changed - {key}: {old_model_config.get(key)} -> {new_model_config.get(key)}"
                        )
                return True

        return False

    def _should_reinit_tts(self, new_config: Dict) -> bool:
        """check if TTS model needs to be reinitialized"""
        if self._old_config.get("TTS_ON") != new_config.get("TTS_ON"):
            return True

        old_model = self._old_config.get("TTS_MODEL")
        new_model = new_config.get("TTS_MODEL")
        if old_model != new_model:
            return True

        if old_model:
            old_model_config = self._old_config.get(old_model, {})
            new_model_config = new_config.get(old_model, {})

            if old_model_config != new_model_config:
                logger.info(f"TTS model {old_model} settings changed")
                for key in set(old_model_config.keys()) | set(new_model_config.keys()):
                    if old_model_config.get(key) != new_model_config.get(key):
                        logger.debug(
                            f"TTS setting changed - {key}: {old_model_config.get(key)} -> {new_model_config.get(key)}"
                        )
                return True

        return False

    def _update_asr(self) -> None:
        """update ASR model"""
        if self.config.get("VOICE_INPUT_ON", False):
            logger.info("Reinitializing ASR...")
            self._init_asr()
        else:
            logger.info("ASR disabled in new configuration")
            self.cache.remove("asr")

    def _update_tts(self) -> None:
        """update TTS model"""
        if self.config.get("TTS_ON", False):
            logger.info("Reinitializing TTS...")
            self._init_tts()
        else:
            logger.info("TTS disabled in new configuration")
            self.cache.remove("tts")


if __name__ == "__main__":

    atexit.register(WebSocketServer.clean_cache)

    # Load configurations from yaml file
    config = load_config_with_env("conf.yaml")

    config["LIVE2D"] = True  # make sure the live2d is enabled

    # Initialize and run the WebSocket server
    server = WebSocketServer(open_llm_vtuber_main_config=config)
    server.run(host=config["HOST"], port=config["PORT"])
    
