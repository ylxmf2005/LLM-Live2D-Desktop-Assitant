class InterruptManager:
    def __init__(self, llm, continue_exec_flag):
        self.llm = llm
        self._continue_exec_flag = continue_exec_flag

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

    def check_interrupt(self):
        """检查是否处于中断状态，如果是则抛出异常。"""
        if not self._continue_exec_flag.is_set():
            raise InterruptedError("Conversation chain interrupted: checked")
