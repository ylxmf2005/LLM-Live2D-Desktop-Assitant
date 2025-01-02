import os
import json

from loguru import logger
from fastapi import WebSocket

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

from .config_manager import (
    Config,
    CharacterConfig,
    SystemConfig,
    ASRConfig,
    TTSConfig,
    LLMConfig,
    read_yaml,
    validate_config,
)


class ServiceContext:
    """Initializes, stores, and updates the asr, tts, and llm instances and other
    configurations for a connected client."""

    def __init__(self):
        self.config: Config = None
        self.system_config: SystemConfig = None
        self.character_config: CharacterConfig = None
        # self.translate_config: TranslatorConfig = None

        self.live2d_model: Live2dModel = None
        self.asr_engine: ASRInterface = None
        self.tts_engine: TTSInterface = None
        self.llm_engine: LLMInterface = None
        # self.translate: TranslateInterface

        # the system prompt is a combination of the persona prompt and live2d expression prompt
        self.system_prompt: str = None

    def __str__(self):
        return (
            f"ServiceContext:\n"
            f"  System Config: {'Loaded' if self.system_config else 'Not Loaded'}\n"
            f"    Details: {json.dumps(self.system_config.model_dump(), indent=6) if self.system_config else 'None'}\n"
            f"  Live2D Model: {self.live2d_model.model_info if self.live2d_model else 'Not Loaded'}\n"
            f"  ASR Engine: {type(self.asr_engine).__name__ if self.asr_engine else 'Not Loaded'}\n"
            f"    Config: {json.dumps(self.character_config.asr_config.model_dump(), indent=6) if self.character_config.asr_config else 'None'}\n"
            f"  TTS Engine: {type(self.tts_engine).__name__ if self.tts_engine else 'Not Loaded'}\n"
            f"    Config: {json.dumps(self.character_config.tts_config.model_dump(), indent=6) if self.character_config.tts_config else 'None'}\n"
            f"  LLM Engine: {type(self.llm_engine).__name__ if self.llm_engine else 'Not Loaded'}\n"
            f"    Config: {json.dumps(self.character_config.llm_config.model_dump(), indent=6) if self.character_config.llm_config else 'None'}\n"
            f"  LLM Provider: {self.character_config.llm_config.llm_provider if self.character_config.llm_config else 'Not Set'}\n"
            f"  System Prompt: {self.system_prompt or 'Not Set'}"
        )

    # ==== Initializers

    def load_cache(
        self,
        config: Config,
        system_config: SystemConfig,
        character_config: CharacterConfig,
        live2d_model: Live2dModel,
        asr_engine: ASRInterface,
        tts_engine: TTSInterface,
        llm_engine: LLMInterface,
    ) -> None:
        """
        Load the ServiceContext with the reference of the provided instances.
        Pass by reference so no reinitialization will be done.
        """
        if not character_config:
            raise ValueError("character_config cannot be None")
        if not system_config:
            raise ValueError("system_config cannot be None")

        self.config = config
        self.system_config = system_config
        self.character_config = character_config
        self.live2d_model = live2d_model
        self.asr_engine = asr_engine
        self.tts_engine = tts_engine
        self.llm_engine = llm_engine

        logger.debug(f"Loaded service context with cache: {character_config}")

    def load_from_config(self, config: Config) -> None:
        """
        Load the ServiceContext with the config.
        Reinitialize the instances if the config is different.

        Parameters:
        - config (Dict): The configuration dictionary.
        """
        if not self.config:
            self.config = config

        if not self.system_config:
            self.system_config = config.system_config

        if not self.character_config:
            self.character_config = config.character_config

        # update all sub-configs

        # init live2d from character config
        self.init_live2d(config.character_config.live2d_model_name)

        # init asr from character config
        self.init_asr(config.character_config.asr_config)

        # init tts from character config
        self.init_tts(config.character_config.tts_config)

        # init llm from character config
        self.init_llm(
            config.character_config.llm_config,
            config.character_config.persona_prompt,
        )

        # store typed config references
        self.config = config
        self.system_config = config.system_config or self.system_config
        self.character_config = config.character_config

    def init_live2d(self, live2d_model_name: str) -> None:
        logger.info(f"Initializing Live2D: {live2d_model_name}")
        try:
            self.live2d_model = Live2dModel(live2d_model_name)
            self.character_config.live2d_model_name = live2d_model_name
        except Exception as e:
            print(f"Error initializing Live2D: {e}")
            print("Proceed without Live2D.")

    def init_asr(self, asr_config: ASRConfig) -> None:
        if not self.asr_engine or (self.character_config.asr_config != asr_config):
            logger.info(f"Initializing ASR: {asr_config.asr_model}")
            self.asr_engine = ASRFactory.get_asr_system(
                asr_config.asr_model,
                **getattr(asr_config, asr_config.asr_model).model_dump(),
            )
            # saving config should be done after successful initialization
            self.character_config.asr_config = asr_config
        else:
            logger.info("ASR already initialized with the same config.")

    def init_tts(self, tts_config: TTSConfig) -> None:
        if not self.tts_engine or (self.character_config.tts_config != tts_config):
            logger.info(f"Initializing TTS: {tts_config.tts_model}")
            self.tts_engine = TTSFactory.get_tts_engine(
                tts_config.tts_model,
                **getattr(tts_config, tts_config.tts_model.lower()).model_dump(),
            )
            # saving config should be done after successful initialization
            self.character_config.tts_config = tts_config
        else:
            logger.info("TTS already initialized with the same config.")

    # TODO - implement llm update logic after separating the memory and system prompt
    def init_llm(self, llm_config: LLMConfig, persona_prompt: str) -> None:
        logger.info(f"Initializing LLM: {llm_config.llm_provider}")

        if (
            self.llm_engine is not None
            and llm_config == self.character_config.llm_config
            and persona_prompt == self.character_config.persona_prompt
        ):
            logger.debug("LLM already initialized with the same config.")
            return

        system_prompt = self.construct_system_prompt(persona_prompt)

        self.llm_engine = LLMFactory.create_llm(
            llm_provider=llm_config.llm_provider,
            system_prompt=system_prompt,
            **(getattr(llm_config, llm_config.llm_provider).model_dump()),
        )
        logger.debug(f"LLM choice: {llm_config.llm_provider}")
        logger.warning(
            f"LLM initialized with config: {getattr(llm_config, llm_config.llm_provider)}"
        )
        logger.debug(f"System prompt: {system_prompt}")

        # Save the current configuration
        self.character_config.llm_config = llm_config
        self.system_prompt = system_prompt

    # ==== utils

    def construct_system_prompt(self, persona_prompt: str) -> str:
        """
        Append live2d expression prompt to persona prompt.

        Parameters:
        - persona_prompt (str): The persona prompt.

        Returns:
        - str: The system prompt.
        """
        logger.debug(f"constructing persona_prompt: '''{persona_prompt}'''")

        # append live2d expression prompt to persona prompt
        persona_prompt += prompt_loader.load_util(
            self.system_config.live2d_expression_prompt
        ).replace("[<insert_emomap_keys>]", self.live2d_model.emo_str)

        logger.debug("\n === System Prompt ===")
        logger.debug(persona_prompt)

        return persona_prompt

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
            new_character_config_data = None

            if config_file_name == "conf.yaml":
                # Load base config
                new_character_config_data = read_yaml("conf.yaml").get(
                    "character_config"
                )
            else:
                # Load alternative config and merge with base config
                config_alts_dir = self.system_config.config_alts_dir
                file_path = os.path.join(config_alts_dir, config_file_name)

                alt_config_data = read_yaml(file_path).get("character_config")

                # Start with original config data and perform a deep merge
                new_character_config_data = self.config.character_config.model_dump()
                new_character_config_data = deep_merge(
                    new_character_config_data, alt_config_data
                )

            if new_character_config_data:
                new_config = {
                    "system_config": self.system_config.model_dump(),
                    "character_config": new_character_config_data,
                }
                new_config = validate_config(new_config)
                self.load_from_config(new_config)
                logger.debug(f"New config: {self}")

                # Send responses to client
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
                            "conf_name": self.character_config.conf_name,
                            "conf_uid": self.character_config.conf_uid,
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
            else:
                raise ValueError(
                    f"Failed to load configuration from {config_file_name}"
                )

        except Exception as e:
            logger.error(f"Error switching configuration: {e}")
            logger.debug(self)
            await websocket.send_text(
                json.dumps(
                    {
                        "type": "error",
                        "message": f"Error switching configuration: {str(e)}",
                    }
                )
            )
            raise e


def deep_merge(dict1, dict2):
    """
    Recursively merges dict2 into dict1, prioritizing values from dict2.
    """
    result = dict1.copy()
    for key, value in dict2.items():
        if key in result and isinstance(result[key], dict) and isinstance(value, dict):
            result[key] = deep_merge(result[key], value)
        else:
            result[key] = value
    return result