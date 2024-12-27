import uuid
import os
import shutil
from loguru import logger
import __init__
from llm.llm_factory import LLMFactory
from asr.asr_factory import ASRFactory
from tts.tts_factory import TTSFactory
from translate.translate_factory import TranslateFactory
from prompts import prompt_loader

from .live2d_model import Live2dModel
from .audio_manager import AudioManager
from .conversation_manager import ConversationManager
from .interrupt_manager import InterruptManager

class OpenLLMVTuberMain:

    def __init__(
        self,
        configs: dict,
        custom_asr=None,
        custom_tts=None,
        websocket=None,
        loop=None,
    ) -> None:
        logger.info(f"t41372/Open-LLM-VTuber, version {__init__.__version__}")
        
        self.config = configs
        self.verbose = self.config.get("VERBOSE", False)
        self.websocket = websocket
        self.live2d = self.init_live2d()
        self.session_id = str(uuid.uuid4().hex)
        self.loop = loop

        # ASR
        if self.config.get("VOICE_INPUT_ON", False):
            if custom_asr is None:
                self.asr = self.init_asr()
            else:
                print("Using custom ASR")
                self.asr = custom_asr
        else:
            self.asr = None

        # TTS
        if self.config.get("TTS_ON", False):
            if custom_tts is None:
                self.tts = self.init_tts()
            else:
                print("Using custom TTS")
                self.tts = custom_tts
        else:
            self.tts = None

        # Translator
        if self.config.get("TRANSLATE_AUDIO", False):
            try:
                translate_provider = self.config.get("TRANSLATE_PROVIDER", "DeepLX")
                self.translator = TranslateFactory.get_translator(
                    translate_provider=translate_provider,
                    **self.config.get(translate_provider, {}),
                )
            except Exception as e:
                print(f"Error initializing Translator: {e}")
                print("Proceed without Translator.")
                self.translator = None
        else:
            self.translator = None

        self.llm = self.init_llm()

        self.audio_manager = AudioManager(self.tts, self.live2d, self.translator, self.config, self.verbose)
        
        self.interrupt_manager = InterruptManager(self.llm)
        
        self.claude_api_key = self.config.get("CLAUDE_API_KEY", None)

        self.conversation_manager = ConversationManager(
            self.config, self.llm, self.asr, self.tts, self.live2d, self.translator, self.audio_manager, self.interrupt_manager, self.claude_api_key, self.verbose, self.loop
        )
        
        if "REMOVE_SPECIAL_CHAR" not in self.config:
            self.config["REMOVE_SPECIAL_CHAR"] = True
            
    def init_live2d(self):
        if not self.config.get("LIVE2D", False):
            return None
        try:
            live2d_model_name = self.config.get("LIVE2D_MODEL")
            live2d_controller = Live2dModel(live2d_model_name)
        except Exception as e:
            print(f"Error initializing Live2D: {e}")
            print("Proceed without Live2D.")
            return None
        return live2d_controller

    def init_llm(self):
        llm_provider = self.config.get("LLM_PROVIDER")
        llm_config = self.config.get(llm_provider, {})
        system_prompt, tools = self.get_system_prompt_and_tools()

        llm = LLMFactory.create_llm(
            llm_provider=llm_provider, SYSTEM_PROMPT=system_prompt,
            tools = tools, caller=None,
            **llm_config
        )
        return llm

    def init_asr(self):
        asr_model = self.config.get("ASR_MODEL")
        asr_config = self.config.get(asr_model, {})
        asr = ASRFactory.get_asr_system(asr_model, **asr_config)
        return asr

    def init_tts(self):
        tts_model = self.config.get("TTS_MODEL", "pyttsx3TTS")
        tts_config = self.config.get(tts_model, {})
        return TTSFactory.get_tts_engine(tts_model, **tts_config)
    
    def get_song_list(self) -> list[str]:
        song_file_path = "./sing/original"
        song_list = os.listdir(song_file_path)
        song_list = [os.path.splitext(song)[0] for song in song_list]
        return song_list
    
    def get_system_prompt_and_tools(self) -> tuple[str, list[dict], callable]:
        if self.config.get("PERSONA_CHOICE"):
            system_prompt = prompt_loader.load_persona(
                self.config.get("PERSONA_CHOICE")
            )
        else:
            system_prompt = self.config.get("DEFAULT_PERSONA_PROMPT_IN_YAML")

        system_prompt += prompt_loader.load_util(
            "tools_prompt"
        ).replace("[<insert_song_list>]", str(self.get_song_list()))            

        # Tool functions calling, temporary no use, because I don't know how to use it when stream=True
        if self.live2d is not None:
            system_prompt += prompt_loader.load_util(
                self.config.get("LIVE2D_Expression_Prompt")
            ).replace("[<insert_emomap_keys>]", self.live2d.emo_str)
        tools = prompt_loader.load_util_json("tools")
        tools[0]["function"]["parameters"]["properties"]["song_name"]["enum"] = self.get_song_list()
        
        if self.verbose:
            print("\n === System Prompt ===")
            print(system_prompt)

        return system_prompt, tools
    def set_audio_output_func(
        self, audio_output_func
    ) -> None:
        self.audio_manager.play_audio_file = audio_output_func

    def clean_cache(self):
        cache_dir = "./cache"
        if os.path.exists(cache_dir):
            shutil.rmtree(cache_dir)
            os.makedirs(cache_dir)

    def conversation_chain(self, user_input=None, clipboard_data=None):
        return self.conversation_manager.conversation_chain(
            user_input=user_input, 
            clipboard_data=clipboard_data
        )

    def interrupt(self, heard_sentence: str = "") -> None:
        self.interrupt_manager.interrupt(heard_sentence)
