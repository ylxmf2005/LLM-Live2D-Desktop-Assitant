import sys
import threading
import atexit
from loguru import logger

from utils import load_config_with_env
from module.openllm_vtuber_main import OpenLLMVTuberMain

if __name__ == "__main__":
    logger.add(sys.stderr, level="DEBUG")

    config = load_config_with_env("conf.yaml")

    vtuber_main = OpenLLMVTuberMain(config)

    atexit.register(vtuber_main.clean_cache)

    def _run_conversation_chain():
        try:
            vtuber_main.conversation_chain()
        except InterruptedError as e:
            print(f"😢Conversation was interrupted. {e}")

    def _interrupt_on_i():
        while input(">>> say i and press enter to interrupt: ") == "i":
            print("\n\n!!!!!!!!!! interrupt !!!!!!!!!!!!...\n")
            print("Heard sentence: ", vtuber_main.conversation_manager.heard_sentence)
            vtuber_main.interrupt(vtuber_main.conversation_manager.heard_sentence)

    if config.get("VOICE_INPUT_ON", False):
        threading.Thread(target=_interrupt_on_i).start()

    print("tts on: ", vtuber_main.config.get("TTS_ON", False))
    while True:
        try:
            vtuber_main.conversation_chain()
        except InterruptedError as e:
            print(f"😢Conversation was interrupted. {e}")
            continue
