import numpy as np
from faster_whisper import WhisperModel
from .asr_interface import ASRInterface


class VoiceRecognition(ASRInterface):

    BEAM_SEARCH = True
    # SAMPLE_RATE # Defined in asr_interface.py

    def __init__(
        self,
        model_path: str = "distil-medium.en",
        download_root: str = None,
        language: str = None,
        device: str = "auto",
    ) -> None:
        self.MODEL_PATH = model_path
        self.LANG = language    

        self.model = WhisperModel(model_path, device="cuda", compute_type="float16", local_files_only=False)

        self.asr_with_vad = None

    # Implemented in asr_interface.py
    # def transcribe_with_local_vad(self) -> str:

    def transcribe_np(self, audio: np.ndarray) -> str:

        segments, info = self.model.transcribe(
            audio,
            beam_size=5 if self.BEAM_SEARCH else 1,
            language=self.LANG,
            condition_on_previous_text=False,
        )

        text = [segment.text for segment in segments]

        if not text:
            return ""
        else:
            return "".join(text)
