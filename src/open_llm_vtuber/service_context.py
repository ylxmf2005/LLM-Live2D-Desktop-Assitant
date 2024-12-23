import os
import json
from typing import Dict

from loguru import logger
from fastapi import APIRouter, WebSocket

from prompts import prompt_loader
from .live2d_model import Live2dModel
from .asr.asr_interface import ASRInterface
from .tts.tts_interface import TTSInterface
from .llm.llm_interface import LLMInterface
from .translate.translate_interface import TranslateInterface

from .asr.asr_factory import ASRFactory
from .tts.tts_factory import TTSFactory
from .llm.llm_factory import LLMFactory
from .translate.translate_factory import TranslateFactory

from .utils.config_loader import load_config


class ServiceContext:
    """Initializes, stores, and updates the asr, tts, llm instance for a connected client."""

    def __init__(self):
        self.system_config: Dict = None
        self.asr_config: Dict = None
        self.tts_config: Dict = None
        self.llm_config: Dict = None
        # self.translate_config: Dict = None

        self.live2d_model: Live2dModel = None
        self.asr_engine: ASRInterface = None
        self.tts_engine: TTSInterface = None
        self.llm_engine: LLMInterface = None
        # self.translate: TranslateInterface

        self.llm_provider: str = None
        self.llm_persona_choice: str = None
        self.llm_text_prompt: str = None
        
    def __str__(self):
        return (
            f"ServiceContext:\n"
            f"  System Config: {'Loaded' if self.system_config else 'Not Loaded'}\n"
            f"    Details: {json.dumps(self.system_config, indent=6) if self.system_config else 'None'}\n"
            f"  Live2D Model: {self.live2d_model.model_info if self.live2d_model else 'Not Loaded'}\n"
            f"  ASR Engine: {type(self.asr_engine).__name__ if self.asr_engine else 'Not Loaded'}\n"
            f"    Config: {json.dumps(self.asr_config, indent=6) if self.asr_config else 'None'}\n"
            f"  TTS Engine: {type(self.tts_engine).__name__ if self.tts_engine else 'Not Loaded'}\n"
            f"    Config: {json.dumps(self.tts_config, indent=6) if self.tts_config else 'None'}\n"
            f"  LLM Engine: {type(self.llm_engine).__name__ if self.llm_engine else 'Not Loaded'}\n"
            f"    Config: {json.dumps(self.llm_config, indent=6) if self.llm_config else 'None'}\n"
            f"  LLM Provider: {self.llm_provider or 'Not Set'}\n"
            f"  LLM Persona: {self.llm_persona_choice or 'Not Set'}"
        )

    # ==== Initializers

    def load_cache(
        self,
        system_config: Dict,
        live2d_model: Live2dModel,
        asr_engine: ASRInterface,
        tts_engine: TTSInterface,
        llm_engine: LLMInterface,
    ) -> None:
        """
        Load the ServiceContext with the reference of the provided instances.
        Pass by reference so no reinitialization will be done.
        No same instance check.
        """
        self.system_config = system_config
        self.live2d_model = live2d_model
        self.asr_engine = asr_engine
        self.tts_engine = tts_engine
        self.llm_engine = llm_engine

    def load_from_config(self, config: Dict) -> None:
        """
        Load the ServiceContext with the config.
        Reinitialize the instances if the config is different.

        Parameters:
        - config (Dict): The configuration dictionary.
        """
        self.system_config = config.get("SYSTEM_CONFIG") if config.get("SYSTEM_CONFIG") else self.system_config
        self.init_live2d(config.get("LIVE2D_MODEL"))
        self.init_asr(config.get("ASR_MODEL"), config.get(config.get("ASR_MODEL")))
        self.init_tts(config.get("TTS_MODEL"), config.get(config.get("TTS_MODEL")))

        logger.debug(config.get("LLM_PROVIDER"))
        logger.debug(config.get(config.get("LLM_PROVIDER")))
        logger.debug(config.get("PERSONA_CHOICE"))
        logger.debug(config.get("DEFAULT_PERSONA_PROMPT_IN_YAML"))

        self.init_llm(
            config.get("LLM_PROVIDER"),
            config.get(config.get("LLM_PROVIDER")),
            config.get("PERSONA_CHOICE"),
            config.get("DEFAULT_PERSONA_PROMPT_IN_YAML"),
        )

    def init_live2d(self, live2d_model_name: str) -> None:
        try:
            self.live2d_model = Live2dModel(live2d_model_name)
        except Exception as e:
            print(f"Error initializing Live2D: {e}")
            print("Proceed without Live2D.")

    def init_asr(self, asr_provider: str, asr_config: dict) -> None:
        if not self.asr_engine or (self.asr_config != asr_config):
            self.asr_engine = ASRFactory.get_asr_system(asr_provider, **asr_config)
            # saving config should be done after successful initialization
            self.asr_config = asr_config
        else:
            logger.debug("ASR already initialized with the same config.")

    def init_tts(self, tts_provider: str, tts_config: dict) -> None:
        if not self.tts_engine or (self.tts_config != tts_config):
            self.tts_engine = TTSFactory.get_tts_engine(tts_provider, **tts_config)
            # saving config should be done after successful initialization
            self.tts_config = tts_config
        else:
            logger.debug("TTS already initialized with the same config.")

    # TODO - implement llm update logic after separating the memory and system prompt
    def init_llm(
        self, llm_provider: str, llm_config: dict, persona_choice: str, text_prompt: str
    ) -> None:
        # Use existing values if new parameters are None
        new_llm_provider = llm_provider if llm_provider is not None else self.llm_provider
        new_llm_config = llm_config if llm_config is not None else self.llm_config
        new_persona_choice = persona_choice if persona_choice is not None else self.llm_persona_choice
        new_text_prompt = text_prompt if text_prompt is not None else self.llm_text_prompt

        # Check if any parameters have changed
        if (self.llm_engine is not None and
            new_llm_provider == self.llm_provider and
            new_llm_config == self.llm_config and
            new_persona_choice == self.llm_persona_choice and
            new_text_prompt == self.llm_text_prompt):
            logger.debug("LLM already initialized with the same config.")
            return

        system_prompt = self.get_system_prompt(new_persona_choice, new_text_prompt)

        self.llm_engine = LLMFactory.create_llm(
            llm_provider=new_llm_provider, SYSTEM_PROMPT=system_prompt, **new_llm_config
        )

        # Save the current configuration
        self.llm_provider = new_llm_provider
        self.llm_config = new_llm_config
        self.llm_persona_choice = new_persona_choice
        self.llm_text_prompt = new_text_prompt

    # ==== utils

    def get_system_prompt(self, persona_choice: str, text_prompt: str) -> str:
        """
        Fetch the persona prompt, construct system prompt, and return the
        system prompt. text_prompt will be used if persona_choice is None.
        """
        logger.debug(f"persona_choice: {persona_choice}, text_prompt: {text_prompt}")

        system_prompt = (
            prompt_loader.load_persona(persona_choice)
            if persona_choice
            else text_prompt
        )

        system_prompt += prompt_loader.load_util(
            self.system_config.get("LIVE2D_Expression_Prompt")
        ).replace("[<insert_emomap_keys>]", self.live2d_model.emo_str)

        logger.debug("\n === System Prompt ===")
        logger.debug(system_prompt)

        return system_prompt

    async def handle_config_switch(
        self,
        websocket: WebSocket,
        config_file_name: str,
    ) -> None:
        """
        Handle the configuration switch request.
        Change the configuration to a new config and notify the client.

        Parameters:
        - websocket (WebSocket): The WebSocket connection.
        - config_file_name (str): The name of the configuration file.
        """
        try:
            new_config = None

            if config_file_name == "conf.yaml":
                new_config = load_config("conf.yaml")

            config_alts_dir = self.system_config.get("CONFIG_ALTS_DIR", "config_alts")
            file_path = os.path.join(config_alts_dir, config_file_name)
            new_config = load_config(file_path)

            if new_config:
                logger.error(self)
                self.load_from_config(new_config)
                logger.error(self)
                await websocket.send_text(
                    json.dumps(
                        {
                            "type": "config-switched",
                            "message": f"Switched to config: {config_file_name}",
                        }
                    )
                )

                await websocket.send_text(
                    json.dumps(
                        {
                            "type": "config-info",
                            "conf_name": self.system_config.get("CONF_NAME"),
                            "conf_uid": self.system_config.get("CONF_UID"),
                        }
                    )
                )

                await websocket.send_text(
                    json.dumps(
                        {
                            "type": "set-model",
                            "model_info": self.live2d_model.model_info,
                        }
                    )
                )
                logger.info(f"Configuration switched to {config_file_name}")

        except Exception as e:
            logger.error(f"Error switching configuration: {e}")
            logger.info(self)
            await websocket.send_text(
                json.dumps(
                    {
                        "type": "error",
                        "message": f"Error switching configuration: {str(e)}",
                    }
                )
            )
            raise e