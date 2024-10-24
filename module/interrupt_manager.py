import threading

class InterruptManager:
    def __init__(self, llm):
        self.llm = llm
        self._continue_exec_flag = threading.Event()
        self._continue_exec_flag.set()
        
    EXEC_FLAG_CHECK_TIMEOUT = 5

    def interrupt(self, heard_sentence: str = "") -> None:
        """设置中断标志以停止对话。

        参数：
        - heard_sentence (str): 在中断前已经显示或听到的句子。
        """
        self._continue_exec_flag.clear()
        self.llm.handle_interrupt(heard_sentence)

    def interrupt_post_processing(self) -> None:
        """在中断后执行的后处理任务，例如重置继续执行的标志。"""
        self._continue_exec_flag.set()  # 重置中断标志
        
    def wait_continue_flag(self):
        return self._continue_exec_flag.wait(self.EXEC_FLAG_CHECK_TIMEOUT)

    def in_interrupt(self):
        # if not self._continue_exec_flag.is_set():
        #     raise InterruptedError("Conversation chain interrupted: checked")
        return not self._continue_exec_flag.is_set()
