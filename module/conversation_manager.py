import threading
import queue
import random
import numpy as np
import os
import json
from typing import Iterator

class ConversationManager:
    def __init__(self, config, llm, asr, tts, live2d, translator, audio_manager, continue_exec_flag, verbose=False):
        self.config = config
        self.llm = llm
        self.asr = asr
        self.tts = tts
        self.live2d = live2d
        self.translator = translator
        self.audio_manager = audio_manager
        self._continue_exec_flag = continue_exec_flag
        self.verbose = verbose
        self.heard_sentence = ""

    EXEC_FLAG_CHECK_TIMEOUT = 5  # seconds

    def conversation_chain(self, user_input: str | np.ndarray | None = None) -> str:
        """
        一次完整的对话流程。
        1. 获取用户输入（文本或音频）
        2. 调用 LLM 生成回复
        3. 播放回复

        参数：
        - user_input (str, numpy array, or None): 用户输入。

        返回：
        - str: LLM 的完整回复
        """

        if not self._continue_exec_flag.wait(
            timeout=self.EXEC_FLAG_CHECK_TIMEOUT
        ):  # 等待执行标志
            print(
                ">> Execution flag not set. In interruption state for too long. Exiting conversation chain."
            )
            raise InterruptedError(
                "Conversation chain interrupted. Wait flag timeout reached."
            )

        # 生成随机颜色代码
        color_code = random.randint(0, 3)
        c = [None] * 4
        c[0] = "\033[91m"
        c[1] = "\033[94m"
        c[2] = "\033[92m"
        c[3] = "\033[0m"

        print(f"{c[color_code]}New Conversation Chain started!")

        if user_input is None:
            user_input = self.get_user_input()
        elif isinstance(user_input, np.ndarray):
            print("transcribing...")
            user_input = self.asr.transcribe_np(user_input)

        if user_input.strip().lower() == self.config.get("EXIT_PHRASE", "exit").lower():
            print("Exiting...")
            exit()

        print(f"User input: {user_input}")

        chat_completion: Iterator[str] = self.llm.chat_iter(user_input)

        if not self.config.get("TTS_ON", False):
            full_response = ""
            for char in chat_completion:
                if not self._continue_exec_flag.is_set():
                    self._interrupt_post_processing()
                    print("\nInterrupted!")
                    return None
                full_response += char
                print(char, end="")
            return full_response

        full_response = self.speak(chat_completion)
        if self.verbose:
            print(f"\nComplete response: [\n{full_response}\n]")

        print(f"{c[color_code]}Conversation completed.")
        return full_response

    def get_user_input(self) -> str:
        """
        根据配置获取用户输入。
        """
        if self.config.get("VOICE_INPUT_ON", False):
            print("Listening from the microphone...")
            return self.asr.transcribe_with_local_vad()
        else:
            return input("\n>> ")

    def speak(self, chat_completion: Iterator[str]) -> str:
        """
        使用 TTS 引擎播放回复。

        参数：
        - chat_completion (Iterator[str]): LLM 的回复

        返回：
        - str: LLM 的完整回复
        """
        full_response = ""
        if self.config.get("SAY_SENTENCE_SEPARATELY", True):
            full_response = self.speak_by_sentence_chain(
                chat_completion
            )
        else:
            full_response = ""
            for char in chat_completion:
                if not self._continue_exec_flag.is_set():
                    print("\nInterrupted!")
                    self._interrupt_post_processing()
                    return None
                print(char, end="")
                full_response += char
            print("\n")

            tts_target_sentence = self.live2d.remove_emotion_keywords(full_response)
            if self.translator and self.config.get("TRANSLATE_AUDIO", False):
                print("Translating...")
                tts_target_sentence = self.translator.translate(tts_target_sentence)
                print(f"Translated: {tts_target_sentence}")

            filename = self.audio_manager.generate_audio_file(tts_target_sentence, "temp")

            if self._continue_exec_flag.is_set():
                self.audio_manager.play_audio_file(
                    sentence=full_response,
                    filepath=filename,
                    instrument_filepath=None
                )
            else:
                self._interrupt_post_processing()

        return full_response

    def speak_by_sentence_chain(self, chat_completion: Iterator[str]) -> str:
        """
        一句一句地生成并播放回复。

        参数：
        - chat_completion (Iterator[str]): LLM 的回复
     
        返回：
        - str: LLM 的完整回复
        """
        full_response = [""]  
        interrupted_error_event = threading.Event()

        sentence_queue = queue.Queue()
        audio_queue = queue.Queue()
        index = 0
        
        def producer_worker():
            nonlocal index
            try:
                sentence_buffer = ""
                for char in chat_completion:
                    if not self._continue_exec_flag.is_set():
                        self._interrupt_post_processing()
                        print("Producer interrupted")
                        return None
                    if char:
                        print(char, end="", flush=True)
                        sentence_buffer += char
                        full_response[0] += char
                        check_result = self.check(sentence_buffer)
                        if check_result == "sing-mode":
                            self.sing(sentence_buffer)
                            sentence_buffer=""
                            break
                        elif check_result:
                            if self.verbose:
                                print("\n")
                            if not self._continue_exec_flag.is_set():
                                self._interrupt_post_processing()
                                print("Producer interrupted")
                                return None
                            sentence_queue.put((index, sentence_buffer))
                            index += 1
                            sentence_buffer = ""

                if sentence_buffer:
                    if not self._continue_exec_flag.is_set():
                        self._interrupt_post_processing()
                        print("Producer interrupted")
                        return None
                    print("\n")
                    sentence_queue.put((index, sentence_buffer))
                    index += 1

            except Exception as e:
                print(
                    f"Producer error: Error processing sentence.\n{e}",
                    "Producer stopped\n",
                )
                return
            finally:
                sentence_queue.put((None, None))  

        def tts_worker():
            try:
                while True:
                    if not self._continue_exec_flag.is_set():
                        self._interrupt_post_processing()
                        print("TTS worker interrupted")
                        return None
                    idx, sentence = sentence_queue.get()
                    if idx is None:
                        sentence_queue.put((None, None)) 
                        break

                    tts_target_sentence = self.live2d.remove_emotion_keywords(sentence)

                    if self.translator and self.config.get("TRANSLATE_AUDIO", False):
                        print("Translating...")
                        tts_target_sentence = self.translator.translate(
                            tts_target_sentence
                        )
                        print(f"Translated: {tts_target_sentence}")

                    audio_filepath = self.audio_manager.generate_audio_file(
                        tts_target_sentence, file_name_no_ext=f"temp-{idx}"
                    )

                    if not self._continue_exec_flag.is_set():
                        self._interrupt_post_processing()
                        print("TTS worker interrupted")
                        return None

                    audio_info = {
                        "index": idx,
                        "sentence": sentence,
                        "audio_filepath": audio_filepath,
                    }
                    audio_queue.put(audio_info)
            except Exception as e:
                print(
                    f"TTS worker error: Error generating audio for sentence.\n{e}",
                    "TTS worker stopped\n",
                )
                return
            finally:
                audio_queue.put(None)  # Signal the consumer that we are done

        def consumer_worker():
            expected_index = 0
            audio_buffer = {}
            self.heard_sentence = ""
            try:
                while True:
                    if not self._continue_exec_flag.is_set():
                        self._interrupt_post_processing()
                        print("Consumer interrupted")
                        return None
                    audio_info = audio_queue.get()
                    if audio_info is None:
                        # No more audio
                        break

                    if audio_info:
                        self.heard_sentence += audio_info["sentence"]
                    idx = audio_info["index"]
                    audio_buffer[idx] = audio_info

                    # 按顺序播放句子
                    while expected_index in audio_buffer:
                        info = audio_buffer.pop(expected_index)
                        if self.verbose:
                            print("\n")
                        self.audio_manager.play_audio_file(
                            sentence=info["sentence"],
                            filepath=info["audio_filepath"],
                            instrument_filepath=None
                        )
                        expected_index += 1

            except Exception as e:
                print(
                    f"Consumer error: Error playing audio.\n{e}",
                    "Consumer stopped\n",
                )
                return

        producer_thread = threading.Thread(target=producer_worker)
        tts_thread = threading.Thread(target=tts_worker)
        consumer_thread = threading.Thread(target=consumer_worker)

        producer_thread.start()
        tts_thread.start()
        consumer_thread.start()

        producer_thread.join()
        tts_thread.join()
        consumer_thread.join()

        return full_response[0]

    def check(self, text: str):
        """
        检查文本是否为完整句子或包含歌曲信息。
        """
        if ("song_name" in text and text.endswith("}")):
            return "sing-mode"

        white_list = [
            "...",
            "Dr.",
            "Mr.",
            "Ms.",
            "Mrs.",
            "Jr.",
            "Sr.",
            "St.",
            "Ave.",
            "Rd.",
            "Blvd.",
            "Dept.",
            "Univ.",
            "Prof.",
            "Ph.D.",
            "M.D.",
            "U.S.",
            "U.K.",
            "U.N.",
            "E.U.",
            "U.S.A.",
            "U.K.",
            "U.S.S.R.",
            "U.A.E.",
        ]

        for item in white_list:
            if text.strip().endswith(item):
                return False

        punctuation_blacklist = [
            ".",
            "?",
            "!",
            "。",
            "；",
            "？",
            "！",
            "…",
            "〰",
            "〜",
            "～",
            "！",
        ]

        return any(text.strip().endswith(punct) for punct in punctuation_blacklist)

    def sing(self, response_text):
        print("sing mode activated")
        """
        处理唱歌功能。

        参数：
        - response_text (str): 包含歌曲信息的完整回复文本
        """
        try:
            data = json.loads(response_text)
            song_name = data.get("song_name")
        except json.JSONDecodeError:
            print("Invalid JSON format in response")
            return

        if not song_name:
            self.audio_manager.play_text("这首歌本魔女还不会唱呢，换一首吧。")
            return

        converted_vocal_path = os.path.join('./sing/converted_vocal', f'{song_name}.wav')
        instrument_path = os.path.join('./sing/instrument', f'{song_name}.wav')

        if not os.path.exists(converted_vocal_path) or not os.path.exists(instrument_path):
            self.audio_manager.play_text("这首歌本魔女还不会唱呢，换一首吧。")
            return

        self.audio_manager.play_text(f"请欣赏 {song_name}")

        self.audio_manager.play_audio_file(
            sentence = song_name,
            filepath=converted_vocal_path,
            instrument_filepath = instrument_path
        )           
