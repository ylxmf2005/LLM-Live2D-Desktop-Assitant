import os
from pathlib import Path
from .tts_interface import TTSInterface
import requests

class GPTSoVITSEngine(TTSInterface):

    def __init__(self, ref_wav_path, prompt_text, aux_ref_audio_paths, prompt_language, text_language, api_base_url = "http://127.0.0.1:9880"):
        if not Path(ref_wav_path).is_absolute():
            self.ref_wav_path = Path(__file__).parent / ref_wav_path
        else:
            self.ref_wav_path = Path(ref_wav_path)
        self.prompt_text = prompt_text
        self.aux_ref_audio_paths = [
            Path(p) if Path(p).is_absolute() else Path(__file__).parent / p
            for p in aux_ref_audio_paths
        ]
        self.prompt_language = prompt_language
        self.text_language = text_language

        self.api_base_url = api_base_url

        self.temp_audio_file = "temp"
        self.file_extension = "wav"
        self.new_audio_dir = "./cache"

        if not os.path.exists(self.new_audio_dir):
            os.makedirs(self.new_audio_dir)


    def generate_audio(self, text, file_name_no_ext=None):
        """
        Generate speech audio file using GPTSoVITS.

        Args:
            text (str): The text to synthesize.
            file_name_no_ext (str, optional): Desired filename without extension.

        Returns:
            str: The path to the generated audio file.
        """
        file_name = self.temp_audio_file
        if file_name_no_ext is not None:
            file_name = file_name_no_ext

        output_path = Path(self.new_audio_dir) / f"{file_name}.{self.file_extension}"

        try:
            ref_wav_file = self.ref_wav_path
            if not ref_wav_file.exists():
                print(f"Reference WAV file not found: {ref_wav_file}")
                return None

            aux_ref_files = []
            for p in self.aux_ref_audio_paths:
                if p.exists():
                    aux_ref_files.append(str(p))
                else:
                    print(f"Auxiliary reference file not found: {p}")

            params = {
                "text": text,
                "text_lang": self.text_language,
                "ref_audio_path": str(ref_wav_file),
                "prompt_text": self.prompt_text,
                "prompt_lang": self.prompt_language,
                "aux_ref_audio_paths": aux_ref_files,
                "top_k": 15,
                "top_p": 1,
                "temperature": 1,
                "text_split_method": "cut0",
                "batch_size": 1,
                "batch_threshold": 0.75,
                "split_bucket": True,
                "return_fragment": False,
                "speed_factor": 1.0,
                "streaming_mode": False,
                "seed": -1,
                "parallel_infer": True,
                "repetition_penalty": 1.35,
                "media_type": "wav"
            }

            url = f"{self.api_base_url}/tts"
            response = requests.post(url, json=params)

            if response.status_code == 200:
                with open(output_path, 'wb') as f:
                    f.write(response.content)
            else:
                print(f"Error in generating audio: {response.status_code} - {response.text}")
                return None

        except Exception as e:
            print(f"Error in generating audio: {e}")
            return None

        return str(output_path)
