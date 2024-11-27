import re
import uuid
import unicodedata

class AudioManager:
    def __init__(self, tts, live2d, translator, config, verbose=False):
        self.tts = tts
        self.live2d = live2d
        self.translator = translator
        self.config = config
        self.verbose = verbose
        self.remove_special_char = config.get("REMOVE_SPECIAL_CHAR", True)
        
    def clean_text(self, text: str) -> str:
        text = re.sub(r'[^\u4e00-\u9fffA-Za-z0-9,]', ' ', text)
        
        if self.remove_special_char:
            text = self.remove_special_characters(text)
            
        return text
        
    def remove_special_characters(self, text: str) -> str:
        """Filter text to remove all non-letter, non-number, and non-punctuation characters."""
        normalized_text = unicodedata.normalize("NFKC", text)

        def is_valid_char(char: str) -> bool:
            category = unicodedata.category(char)
            return (
                category.startswith("L")
                or category.startswith("N")
                or category.startswith("P")
                or char.isspace()
            )

        filtered_text = "".join(char for char in normalized_text if is_valid_char(char))
        return filtered_text

    def generate_audio_file(self, sentence: str, file_name_no_ext: str) -> str | None:
        """
        Generate an audio file from a given sentence using the TTS engine.

        Parameters:
        - sentence (str): The sentence to generate audio for
        - file_name_no_ext (str): The name of the audio file (without extension)

        Returns:
        - str or None: The path of the generated audio file, or None if the sentence iempty
        """
        sentence = self.clean_text(sentence)
        if self.verbose:
            print(f">> generating {file_name_no_ext}...")

        if not self.tts:
            return None

        if self.live2d:
            sentence = self.live2d.remove_emotion_keywords(sentence)

        if sentence.strip() == "":
            return None

        return self.tts.generate_audio(sentence, file_name_no_ext=file_name_no_ext)

    def play_audio_file(self, sentence: str | None, filepath: str | None, instrument_filepath: str | None = None) -> None:
        """
        Play the audio file located at the given filepath.
        """
        if filepath is None:
            print("No audio to be streamed. Response is empty.")
            return

        if sentence is None:
            sentence = ""

        try:
            if self.verbose:
                print(f">> Playing {filepath}...")
            self.tts.play_audio_file_local(filepath)

            self.tts.remove_file(filepath, verbose=self.verbose)
        except ValueError as e:
            if str(e) == "Audio is empty or all zero.":
                print("No audio to be streamed. Response is empty.")
            else:
                raise e
        except Exception as e:
            print(f"Error playing the audio file {filepath}: {e}")

    def play_text(self, text: str) -> None:
            if not text.strip():
                print("No text to play.")
                return

            sentences = re.split(r'(?<=[.!?。！？])\s*', text)
            sentences = [s for s in sentences if s.strip()] 

            for sentence in sentences:                
                tts_target_sentence = self.live2d.remove_emotion_keywords(sentence)

                if self.translator and self.config.get("TRANSLATE_AUDIO",   False):
                    print("Translating...")
                    tts_target_sentence = self.translator.translate (tts_target_sentence)
                    print(f"Translated: {tts_target_sentence}")

                audio_filepath = self.generate_audio_file(
                    tts_target_sentence, file_name_no_ext=f"temp_text_{uuid.uuid4()}"
                )

                if audio_filepath:
                    self.play_audio_file(sentence=sentence,     filepath=audio_filepath)
                else:
                    print("No audio generated for sentence.")


