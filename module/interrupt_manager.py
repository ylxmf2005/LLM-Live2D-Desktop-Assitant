import threading

class InterruptManager:
    def __init__(self, llm):
        self.llm = llm
        self._continue_exec_flag = threading.Event()
        self._continue_exec_flag.set()
        
    EXEC_FLAG_CHECK_TIMEOUT = 5

    def interrupt(self, heard_sentence: str = "") -> None:
        self._continue_exec_flag.clear()
        self.llm.handle_interrupt(heard_sentence)

    def interrupt_post_processing(self) -> None:
        self._continue_exec_flag.set() 
        
    def wait_continue_flag(self):
        return self._continue_exec_flag.wait(self.EXEC_FLAG_CHECK_TIMEOUT)

    def in_interrupt(self):
        # if not self._continue_exec_flag.is_set():
        #     raise InterruptedError("Conversation chain interrupted: checked")
        return not self._continue_exec_flag.is_set()
