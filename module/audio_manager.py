class AudioManager:
    def __init__(self, tts, live2d, translator, config, verbose=False):
        self.tts = tts
        self.live2d = live2d
        self.translator = translator
        self.config = config
        self.verbose = verbose

    def generate_audio_file(self, sentence: str, file_name_no_ext: str) -> str | None:
        """
        使用 TTS 引擎从给定句子生成音频文件。

        参数：
        - sentence (str): 要生成音频的句子
        - file_name_no_ext (str): 音频文件的名称（不含扩展名）

        返回：
        - str 或 None: 生成的音频文件路径，如果句子为空则返回 None
        """
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
        播放音频文件。

        参数：
        - sentence (str): 要显示的句子
        - filepath (str): 音频文件的路径。如果为 None，则不播放音频。
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
        """
        从文本生成音频并播放。

        参数：
        - text (str): 要转换为语音并播放的文本。
        """
        if not text.strip():
            print("No text to play.")
            return

        tts_target_sentence = self.live2d.remove_emotion_keywords(text)

        if self.translator and self.config.get("TRANSLATE_AUDIO", False):
            print("Translating...")
            tts_target_sentence = self.translator.translate(tts_target_sentence)
            print(f"Translated: {tts_target_sentence}")

        audio_filepath = self.generate_audio_file(
            tts_target_sentence, file_name_no_ext="temp_text"
        )

        if audio_filepath:
            self.play_audio_file(sentence=text, filepath=audio_filepath)
        else:
            print("No audio generated.")
