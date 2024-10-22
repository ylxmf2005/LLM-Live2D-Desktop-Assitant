import os
import random
import shutil
import atexit
import threading
import queue
import uuid
from typing import Callable, Iterator, Optional
from fastapi import WebSocket
import numpy as np
from concurrent.futures import ThreadPoolExecutor
import yaml

from asr.asr_factory import ASRFactory
from asr.asr_interface import ASRInterface
from live2d_model import Live2dModel
from llm.llm_factory import LLMFactory
from llm.llm_interface import LLMInterface
from prompts import prompt_loader
from tts.tts_factory import TTSFactory
from tts.tts_interface import TTSInterface
from translate.translate_interface import TranslateInterface
from translate.translate_factory import TranslateFactory


class OpenLLMVTuberMain:
    """
    The main class for the OpenLLM VTuber.
    It initializes the Live2D controller, ASR, TTS, and LLM based on the provided configuration.
    Run `conversation_chain` to start one conversation (user_input -> llm -> speak).

    Attributes:
    - config (dict): The configuration dictionary.
    - llm (LLMInterface): The LLM instance.
    - asr (ASRInterface): The ASR instance.
    - tts (TTSInterface): The TTS instance.
    """

    config: dict
    llm: LLMInterface
    asr: ASRInterface
    tts: TTSInterface
    translator: TranslateInterface | None
    live2d: Live2dModel | None
    _continue_exec_flag: threading.Event
    EXEC_FLAG_CHECK_TIMEOUT = 5  # seconds

    def __init__(
        self,
        configs: dict,
        custom_asr: ASRInterface | None = None,
        custom_tts: TTSInterface | None = None,
        websocket: WebSocket | None = None,
    ) -> None:
        self.config = configs
        self.verbose = self.config.get("VERBOSE", False)
        self.websocket = websocket
        self.live2d = self.init_live2d()
        self._continue_exec_flag = threading.Event()
        self._continue_exec_flag.set()  # Set the flag to continue execution

        # Init ASR if voice input is on.
        if self.config.get("VOICE_INPUT_ON", False):
            # if custom_asr is provided, don't init asr and use it instead.
            if custom_asr is None:
                self.asr = self.init_asr()
            else:
                print("Using custom ASR")
                self.asr = custom_asr
        else:
            self.asr = None

        # Init TTS if TTS is on.
        if self.config.get("TTS_ON", False):
            # if custom_tts is provided, don't init tts and use it instead.
            if custom_tts is None:
                self.tts = self.init_tts()
            else:
                print("Using custom TTS")
                self.tts = custom_tts
        else:
            self.tts = None

        # Init Translator if enabled
        if self.config.get("TRANSLATE_AUDIO", False):
            try:
                translate_provider = self.config.get("TRANSLATE_PROVIDER", "DeepLX")
                self.translator = TranslateFactory.get_translator(
                    translate_provider=translate_provider,
                    **self.config.get(translate_provider, {}),
                )
            except Exception as e:
                print(f"Error initializing Translator: {e}")
                print("Proceed without Translator.")
                self.translator = None
        else:
            self.translator = None

        self.llm = self.init_llm()

    # Initialization methods

    def init_live2d(self) -> Live2dModel | None:
        if not self.config.get("LIVE2D", False):
            return None
        try:
            live2d_model_name = self.config.get("LIVE2D_MODEL")
            live2d_controller = Live2dModel(live2d_model_name)
        except Exception as e:
            print(f"Error initializing Live2D: {e}")
            print("Proceed without Live2D.")
            return None
        return live2d_controller

    def init_llm(self) -> LLMInterface:
        llm_provider = self.config.get("LLM_PROVIDER")
        llm_config = self.config.get(llm_provider, {})
        system_prompt = self.get_system_prompt()

        llm = LLMFactory.create_llm(
            llm_provider=llm_provider, SYSTEM_PROMPT=system_prompt, **llm_config
        )
        return llm

    def init_asr(self) -> ASRInterface:
        asr_model = self.config.get("ASR_MODEL")
        asr_config = self.config.get(asr_model, {})
        if asr_model == "AzureASR":
            import api_keys

            asr_config = {
                "callback": print,
                "subscription_key": api_keys.AZURE_API_Key,
                "region": api_keys.AZURE_REGION,
            }

        asr = ASRFactory.get_asr_system(asr_model, **asr_config)
        return asr

    def init_tts(self) -> TTSInterface:
        tts_model = self.config.get("TTS_MODEL", "pyttsx3TTS")
        tts_config = self.config.get(tts_model, {})

        if tts_model == "AzureTTS":
            import api_keys

            tts_config = {
                "api_key": api_keys.AZURE_API_Key,
                "region": api_keys.AZURE_REGION,
                "voice": api_keys.AZURE_VOICE,
            }
        tts = TTSFactory.get_tts_engine(tts_model, **tts_config)

        return tts

    def set_audio_output_func(
        self, audio_output_func: Callable[[Optional[str], Optional[str], Optional[str]], None]
    ) -> None:
        """
        Set the audio output function to be used for playing audio files.
        The function should accept two arguments: sentence (str) and filepath (str).

        sentence: str | None
        - The sentence to be displayed on the frontend.
        - If None, empty sentence will be displayed.

        filepath: str | None
        - The path to the audio file to be played.
        - If None, no audio will be played.

        Here is an example of the function:
        ~~~python
        def _play_audio_file(sentence: str | None, filepath: str | None) -> None:
            if filepath is None:
                print("No audio to be streamed. Response is empty.")
                return

            if sentence is None:
                sentence = ""
            print(f">> Playing {filepath}...")
            playsound(filepath)
        ~~~
        """

        self._play_audio_file = audio_output_func

        # def _play_audio_file(self, sentence: str, filepath: str | None) -> None:

    def get_song_list_str(self) -> str:
        song_file_path = "./sing/original"
        song_list = os.listdir(song_file_path)
        song_list_str = "\n".join([os.path.splitext(song)[0] for song in song_list])
        return song_list_str
    
    def get_system_prompt(self) -> str:
        """
        Construct and return the system prompt based on the configuration file.
        """
        if self.config.get("PERSONA_CHOICE"):
            system_prompt = prompt_loader.load_persona(
                self.config.get("PERSONA_CHOICE")
            )
        else:
            system_prompt = self.config.get("DEFAULT_PERSONA_PROMPT_IN_YAML")

        if self.live2d is not None:
            system_prompt += prompt_loader.load_util(
                self.config.get("LIVE2D_Expression_Prompt")
            ).replace("[<insert_emomap_keys>]", self.live2d.emo_str)

        system_prompt += prompt_loader.load_util(
            "song_prompt"
        ).replace("[<insert_song_list>]", self.get_song_list_str())
        
        if self.verbose:
            print("\n === System Prompt ===")
            print(system_prompt)

        return system_prompt

    # Main conversation methods

    def conversation_chain(self, user_input: str | np.ndarray | None = None) -> str:
        """
        One iteration of the main conversation.
        1. Get user input (text or audio) if not provided as an argument
        2. Call the LLM with the user input
        3. Speak (or not)

        Parameters:
        - user_input (str, numpy array, or None): The user input to be used in the conversation. If it's string, it will be considered as user input. If it's a numpy array, it will be transcribed. If it's None, we'll request input from the user.

        Returns:
        - str: The full response from the LLM
        """

        if not self._continue_exec_flag.wait(
            timeout=self.EXEC_FLAG_CHECK_TIMEOUT
        ):  # Wait for the flag to be set
            print(
                ">> Execution flag not set. In interruption state for too long. Exiting conversation chain."
            )
            raise InterruptedError(
                "Conversation chain interrupted. Wait flag timeout reached."
            )

        # Generate a random number between 0 and 3
        color_code = random.randint(0, 3)
        c = [None] * 4
        # Define the color codes for red, blue, green, and white
        c[0] = "\033[91m"
        c[1] = "\033[94m"
        c[2] = "\033[92m"
        c[3] = "\033[0m"

        # Apply the color to the console output
        print(f"{c[color_code]}New Conversation Chain started!")

        # if user_input is not string, make it string
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
        Get user input using the method specified in the configuration file.
        It can be from the console, local microphone, or the browser microphone.

        Returns:
        - str: The user input
        """
        # for live2d with browser, their input are now injected by the server class
        # and they no longer use this method
        if self.config.get("VOICE_INPUT_ON", False):
            # get audio from the local microphone
            print("Listening from the microphone...")
            return self.asr.transcribe_with_local_vad()
        else:
            return input("\n>> ")

    def speak(self, chat_completion: Iterator[str]) -> str:
        """
        Speak the chat completion using the TTS engine.

        Parameters:
        - chat_completion (Iterator[str]): The chat completion to speak

        Returns:
        - str: The full response from the LLM
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

            filename = self._generate_audio_file(tts_target_sentence, "temp")

            if self._continue_exec_flag.is_set():
                self._play_audio_file(
                    sentence=full_response,
                    filepath=filename,
                    instrument_filepath=None
                )
            else:
                self._interrupt_post_processing()

        return full_response

    def _generate_audio_file(self, sentence: str, file_name_no_ext: str) -> str | None:
        """
        Generate an audio file from the given sentence using the TTS engine.

        Parameters:
        - sentence (str): The sentence to generate audio from
        - file_name_no_ext (str): The name of the audio file without the extension

        Returns:
        - str or None: The path to the generated audio file or None if the sentence is empty
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

    def _play_audio_file(self, sentence: str | None, filepath: str | None, instrument_filepath: str | None) -> None:
        """
        Play the audio file either locally or remotely using the Live2D controller if available.

        Parameters:
        - sentence (str): The sentence to display
        - filepath (str): The path to the audio file. If None, no audio will be streamed.
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

    def speak_by_sentence_chain(self, chat_completion: Iterator[str]) -> str:
        """
        Generate and play the chat completion sentences one by one using the TTS engine.
        Now properly handles interrupts in a multi-threaded environment using the existing  _continue_exec_flag.

        Parameters:
        - chat_completion (Iterator[str]): The chat completion to speak
     
        Returns:
        - str: The full response from the LLM
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
                        raise InterruptedError("Producer interrupted")
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
                                raise InterruptedError("Producer interrupted")
                            sentence_queue.put((index, sentence_buffer))
                            index += 1
                            sentence_buffer = ""

                if sentence_buffer:
                    if not self._continue_exec_flag.is_set():
                        raise InterruptedError("Producer interrupted")
                    print("\n")
                    sentence_queue.put((index, sentence_buffer))
                    index += 1

            except InterruptedError:
                print("\nProducer interrupted")
                interrupted_error_event.set()
                return
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
                        raise InterruptedError("TTS worker interrupted")
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

                    audio_filepath = self._generate_audio_file(
                        tts_target_sentence, file_name_no_ext=f"temp-{idx}"
                    )

                    if not self._continue_exec_flag.is_set():
                        raise InterruptedError("TTS worker interrupted")

                    audio_info = {
                        "index": idx,
                        "sentence": sentence,
                        "audio_filepath": audio_filepath,
                    }
                    audio_queue.put(audio_info)
            except InterruptedError:
                print("\nTTS worker interrupted")
                interrupted_error_event.set()
                return
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
            try:
                while True:
                    if not self._continue_exec_flag.is_set():
                        raise InterruptedError("Consumer interrupted")
                    audio_info = audio_queue.get()
                    if audio_info is None:
                        # No more audio
                        break
                    idx = audio_info["index"]
                    audio_buffer[idx] = audio_info

                    # Play sentences in order
                    while expected_index in audio_buffer:
                        info = audio_buffer.pop(expected_index)
                        if self.verbose:
                            print("\n")
                        self._play_audio_file(
                            sentence=info["sentence"],
                            filepath=info["audio_filepath"],
                            instrument_filepath=None
                        )
                        expected_index += 1

            except InterruptedError:
                print("\nConsumer interrupted")
                interrupted_error_event.set()
                return
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


    def _play_text(self, text: str) -> None:
        """
        Generate audio from text and play it using the TTS engine.
        This function follows the same logic as the 'speak' function to produce and play sound.

        Parameters:
        - text (str): The text to be converted to speech and played.
        """
        if not text.strip():
            print("No text to play.")
            return

        tts_target_sentence = self.live2d.remove_emotion_keywords(text)

        if self.translator and self.config.get("TRANSLATE_AUDIO", False):
            print("Translating...")
            tts_target_sentence = self.translator.translate(tts_target_sentence)
            print(f"Translated: {tts_target_sentence}")

        audio_filepath = self._generate_audio_file(
            tts_target_sentence, file_name_no_ext="temp_text"
        )

        if audio_filepath:
            self._play_audio_file(sentence=text, filepath=audio_filepath, instrument_filepath=None)
        else:
            print("No audio generated.")

    
    def sing(self, response_text):
        print("sing mode activated")
        """
        Handle singing functionality when 'sing-mode' is activated.

        Parameters:
        - response_text (str): The full response text containing song information

        Returns:
        - None
        """
        import json

        try:
            data = json.loads(response_text)
            song_name = data.get("song_name") # without the extension name
        except json.JSONDecodeError:
            print("Invalid JSON format in response")
            return

        if not song_name:
            self._play_text("这首歌本魔女还不会唱呢，换一首吧。")
            return

        # merged_file_path = os.path.join('./sing/merged', f'{song_name}.wav')
        converted_vocal_path = os.path.join('./sing/converted_vocal', f'{song_name}.wav')
        instrument_path = os.path.join('./sing/instrument', f'{song_name}.wav')

        if not os.path.exists(converted_vocal_path) or not os.path.exists(instrument_path):
            self._play_text("这首歌本魔女还不会唱呢，换一首吧。")
            return

        self._play_text(f"请欣赏 {song_name}")

        self._play_audio_file(
            sentence = song_name,
            filepath=converted_vocal_path,
            instrument_filepath = instrument_path
        )           
       

    def interrupt(self, heard_sentence: str = "") -> None:
        """Set the interrupt flag to stop the conversation chain.
        Preferably provide the sentences that were already shown or heard by the user before the interrupt so that the LLM can handle the memory properly.

        Parameters:
        - heard_sentence (str): The sentence that was already shown or heard by the user before the interrupt.
            (because apparently the user won't know the rest of the response.)
        """
        self._continue_exec_flag.clear()
        self.llm.handle_interrupt(heard_sentence)

    def _interrupt_post_processing(self) -> None:
        """Perform post-processing tasks (like resetting the continue flag to allow next conversation chain to start) after an interrupt."""
        self._continue_exec_flag.set()  # Reset the interrupt flag

    def _check_interrupt(self):
        """Check if we are in an interrupt state and raise an exception if we are."""
        if not self._continue_exec_flag.is_set():
            raise InterruptedError("Conversation chain interrupted: checked")

    def check(self, text: str):
        """
        Check if the text is a complete sentence / {"song_name" : ""}.
        text: str
            the text to check
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

    def clean_cache(self):
        cache_dir = "./cache"
        if os.path.exists(cache_dir):
            shutil.rmtree(cache_dir)
            os.makedirs(cache_dir)


if __name__ == "__main__":
    with open("conf.yaml", "rb") as f:
        config = yaml.safe_load(f)

    vtuber_main = OpenLLMVTuberMain(config)

    atexit.register(vtuber_main.clean_cache)

    def _run_conversation_chain():
        try:
            vtuber_main.conversation_chain()
        except InterruptedError as e:
            print(f"😢Conversation was interrupted. {e}")

    while True:
        print("tts on: ", vtuber_main.config.get("TTS_ON", False))
        if vtuber_main.config.get("TTS_ON", False) == False:
            print("its indeed off")
            vtuber_main.conversation_chain()
        else:
            threading.Thread(target=_run_conversation_chain).start()

            if input(">>> say i and press enter to interrupt: ") == "i":
                print("\n\n!!!!!!!!!! interrupt !!!!!!!!!!!!...\n")
                vtuber_main.interrupt()
