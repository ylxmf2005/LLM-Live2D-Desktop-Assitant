# config_manager/character.py
from pydantic import Field, field_validator
from typing import Dict, ClassVar
from .i18n import I18nMixin, Description, MultiLingualString
from .llm import LLMConfig
from .asr import ASRConfig
from .tts import TTSConfig
from .translate import TranslatorConfig

class CharacterConfig(I18nMixin):
    """Character configuration settings."""

    conf_name: str = Field(..., alias="conf_name")
    conf_uid: str = Field(..., alias="conf_uid")
    live2d_model_name: str = Field(..., alias="live2d_model")
    persona_prompt: str = Field(..., alias="persona_prompt")
    llm_config: LLMConfig = Field(..., alias="llm_config")
    asr_config: ASRConfig = Field(..., alias="asr_config")
    tts_config: TTSConfig = Field(..., alias="tts_config")
    translator: TranslatorConfig = Field(..., alias="translator")

    DESCRIPTIONS: ClassVar[Dict[str, Description]] = {
        "conf_name": Description(
            en="Name of the character configuration",
            zh="角色配置名称"
        ),
        "conf_uid": Description(
            en="Unique identifier for the character configuration",
            zh="角色配置唯一标识符"
        ),
        "live2d_model": Description(
            en="Name of the Live2D model to use",
            zh="使用的Live2D模型名称"
        ),
        "persona_prompt": Description(
            en="Persona prompt. The persona of your character.",
            zh="角色人设提示词"
        ),
        "llm_config": Description(
            en="Configuration for the Language Learning Model",
            zh="语言模型配置"
        ),
        "asr_config": Description(
            en="Configuration for Automatic Speech Recognition",
            zh="语音识别配置"
        ),
        "tts_config": Description(
            en="Configuration for Text-to-Speech",
            zh="语音合成配置"
        ),
        "translator": Description(
            en="Configuration for the translator",
            zh="翻译器配置"
        ),
    }

    @field_validator("persona_prompt")
    def check_default_persona_prompt(cls, v):
        if not v:
            raise ValueError(
                "Persona_prompt cannot be empty. Please provide a persona prompt."
            )
        return v