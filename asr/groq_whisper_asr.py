import io
import wave
import numpy as np
from groq import Groq
from .asr_interface import ASRInterface
import sounddevice as sd

class VoiceRecognition(ASRInterface):

    # sample_rate, n_channels, and sampwidth are defined in asr_interface.py

    def __init__(
        self, api_key: str, model: str = "distil-whisper-large-v3-en", lang: str = "en"
    ) -> None:
        print("Initializing Groq ASR...")
        self.client = Groq(api_key=api_key)
        self.lang = lang
        self.model = model

    # Implemented in asr_interface.py
    # def transcribe_with_local_vad(self) -> str:

    def transcribe_np(self, audio: np.ndarray) -> str:
        """Transcribe speech audio in numpy array format and return the transcription.

        Args:
            audio: The numpy array of the audio data to transcribe.
        """

        print("Transcribing audio (GroqWhisperASR)...")

        # Turn the audio into an audio file
        # Make sure the audio is in the range [-1, 1]
        audio = np.clip(audio, -1, 1)
        # Convert the audio to 16-bit PCM
        audio_integer = (audio * 32767).astype(np.int16)

        # groq api requires a file-like object for the audio data, so we use a BytesIO object
        audio_buffer = io.BytesIO()

        with wave.open(audio_buffer, "wb") as wf:
            wf.setnchannels(self.NUM_CHANNELS)
            wf.setsampwidth(self.SAMPLE_WIDTH)
            wf.setframerate(self.SAMPLE_RATE)
            wf.writeframes(audio_integer.tobytes())

        audio_buffer.seek(0)

        # Transcribe the audio with the BytesIO object
        transcription = self.client.audio.transcriptions.create(
            file=("audio.wav", audio_buffer.read()),
            model=self.model,
            # prompt="Specify context or spelling",
            response_format="text",
            language=self.lang,
            temperature=0.0,
        )

        return transcription
    

def record_audio(duration: int, sample_rate: int) -> np.ndarray:
    """Record audio from the microphone."""
    print("Recording...")
    audio = sd.rec(int(duration * sample_rate), samplerate=sample_rate, channels=1, dtype='float32')
    sd.wait()  # Wait until recording is finished
    print("Recording finished.")
    return audio.flatten()

if __name__ == "__main__":
    api_key = ""
    duration = 5
    sample_rate = 16000

    audio_data = record_audio(duration, sample_rate)

    asr = VoiceRecognition(api_key=api_key)

    transcription = asr.transcribe_np(audio_data)

    print("Transcription:", transcription)