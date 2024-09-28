import os
from pathlib import Path
from .tts_interface import TTSInterface
import requests

class GPTSoVITSEngine(TTSInterface):

    def __init__(self, ref_wav_path, prompt_text="", aux_ref_audio_paths=[], prompt_language="ja", text_language="ja"):
        # Store parameters
        self.ref_wav_path = Path(__file__).parent / ref_wav_path
        self.prompt_text = prompt_text
        self.aux_ref_audio_paths = [Path(__file__).parent / p for p in aux_ref_audio_paths]
        self.prompt_language = prompt_language
        self.text_language = text_language

        # Set the base URL for the API
        self.api_base_url = "http://127.0.0.1:9880"

        # Settings for output file
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
            # Prepare reference audio file
            ref_wav_file = self.ref_wav_path
            if not ref_wav_file.exists():
                print(f"Reference WAV file not found: {ref_wav_file}")
                return None

            # Prepare auxiliary reference audio files
            aux_ref_files = []
            for p in self.aux_ref_audio_paths:
                if p.exists():
                    aux_ref_files.append(str(p))
                else:
                    print(f"Auxiliary reference file not found: {p}")

            # Prepare parameters
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

            # Send POST request
            url = f"{self.api_base_url}/tts"
            response = requests.post(url, json=params)

            if response.status_code == 200:
                # Save the audio data to the output file
                with open(output_path, 'wb') as f:
                    f.write(response.content)
            else:
                # Handle error
                print(f"Error in generating audio: {response.status_code} - {response.text}")
                return None

        except Exception as e:
            print(f"Error in generating audio: {e}")
            return None

        return str(output_path)
        
if __name__ == "__main__":
    ref_wav_path = "elaina1.wav"
    aux_ref_audio_paths = ["elaina1.wav", "elaina2.wav"]
    prompt_text = "魔女の旅旅をお買い上げになったあなたに、魔法のように時空を超えて、語りかける、麗しい声の少女は。"
    text = "ふとした退屈な時間を埋めるくらいにはなるんじゃないでしょうか"

    tts_engine = GPTSoVITSEngine(ref_wav_path, prompt_text, aux_ref_audio_paths, prompt_language='ja', text_language='ja')
    output_path = tts_engine.generate_audio(text, file_name_no_ext="output")

    if output_path:
        print(f"Generated audio file saved at: {output_path}")
    else:
        print("Failed to generate audio.")
