# pip install pyautogui pyautogui pillow pyobjc pywin32
import sys
import os
import uuid
import shutil
import base64
import subprocess
import asyncio
import os
import json
import base64
import pyautogui
import ctypes
import time

if sys.platform == "darwin":
    from computer.loop import sampling_loop, APIProvider
    from computer.tools import ToolResult
    from anthropic.types.beta import BetaMessage, BetaMessageParam
    from anthropic import APIResponse
    async def control_computer(api_key: str, instruction: str, api_response_callback=None):
        messages: list[BetaMessageParam] = [
            {
                "role": "user",
                "content": instruction,
            }
        ]
        
        provider = APIProvider.ANTHROPIC
    
        # Define callbacks (you can customize these)
        def output_callback(content_block):
            if isinstance(content_block, dict) and content_block.get("type") == "text":
                print("Assistant:", content_block.get("text"))
    
        def tool_output_callback(result: ToolResult, tool_use_id: str):
            if result.output:
                print(f"> Tool Output [{tool_use_id}]:", result.output)
            if result.error:
                print(f"!!! Tool Error [{tool_use_id}]:", result.error)
            if result.base64_image:
                # Save the image to a file if needed
                os.makedirs("cache", exist_ok=True)
                image_data = result.base64_image
                with open(f"cache/screenshot_{tool_use_id}.png", "wb") as f:
                    f.write(base64.b64decode(image_data))
                print(f"Took screenshot screenshot_{tool_use_id}.png")
    
        # If no api_response_callback is provided, use a default one
        if api_response_callback is None:
            def api_response_callback(response: APIResponse[BetaMessage]):
                print(
                    "\n---------------\nAPI Response:\n",
                    json.dumps(json.loads(response.text)["content"], indent=4),  # type: ignore
                    "\n",
                )
    
        # Run the sampling loop
        messages = await sampling_loop(
            model="claude-3-5-sonnet-20241022",
            provider=provider,
            system_prompt_suffix="",
            messages=messages,
            output_callback=output_callback,
            tool_output_callback=tool_output_callback,
            api_response_callback=api_response_callback,
            api_key=api_key,
            only_n_most_recent_images=10,
            max_tokens=4096,
        )


def get_clipboard_content():
    content = {}

    if sys.platform.startswith('win'):  # Windows
        import win32clipboard
        import win32con
        from PIL import Image
        import io

        win32clipboard.OpenClipboard()
        try:
            if win32clipboard.IsClipboardFormatAvailable(win32con.CF_UNICODETEXT):
                text_data = win32clipboard.GetClipboardData(win32con.CF_UNICODETEXT)
                content['text'] = text_data
            if win32clipboard.IsClipboardFormatAvailable(win32clipboard.CF_DIB):
                dib = win32clipboard.GetClipboardData(win32clipboard.CF_DIB)
                image = Image.open(io.BytesIO(dib))
                buffered = io.BytesIO()
                image.save(buffered, format="PNG")
                img_str = base64.b64encode(buffered.getvalue()).decode('utf-8')
                content['image'] = img_str
        except Exception as e:
            print(f"Error accessing clipboard: {e}")
        finally:
            win32clipboard.CloseClipboard()
    elif sys.platform == 'darwin': # MacOS
        from AppKit import NSPasteboard, NSPasteboardTypePNG, NSPasteboardTypeString
        from Foundation import NSData

        pasteboard = NSPasteboard.generalPasteboard()
        types = pasteboard.types()

        if NSPasteboardTypeString in types:
            text = pasteboard.stringForType_(NSPasteboardTypeString)
            content['text'] = text

        if NSPasteboardTypePNG in types:
            data = pasteboard.dataForType_(NSPasteboardTypePNG)
            if data:
                img_str = base64.b64encode(data.bytes()).decode('utf-8')
                content['image'] = img_str
    else:
        print("Unsupported platform for clipboard operations.")
    return content

def copy_selected_content():
    if sys.platform.startswith('win'):
        pyautogui.hotkey('ctrl', 'c')
    elif sys.platform == 'darwin':
        subprocess.run(['osascript', '-e', 'tell application "System Events" to keystroke "c" using {command down}'])
    else:
        print("Unsupported platform for copy operation.")

import sys
import subprocess

def screenshot_and_copy():
    if sys.platform.startswith('win'):
        from PIL import ImageGrab
        import win32clipboard
        from io import BytesIO

        img = ImageGrab.grab()
        output = BytesIO()
        img.save(output, 'BMP')
        data = output.getvalue()[14:]
        output.close()

        win32clipboard.OpenClipboard()
        win32clipboard.EmptyClipboard()
        win32clipboard.SetClipboardData(win32clipboard.CF_DIB, data)
        win32clipboard.CloseClipboard()
    elif sys.platform == 'darwin':
        subprocess.run(['screencapture', '-c'])
    else:
        raise NotImplementedError("Unsupported OS")


def input_text(text):
    if sys.platform.startswith('win'):
        # Windows implementation
        import win32clipboard
        import win32con
        import win32gui
        import win32api

        def set_clipboard_text(text):
            win32clipboard.OpenClipboard()
            win32clipboard.EmptyClipboard()
            win32clipboard.SetClipboardData(win32con.CF_UNICODETEXT, text)
            win32clipboard.CloseClipboard()

        def paste_to_active_window():
            hwnd = win32gui.GetForegroundWindow()
            if hwnd:
                win32api.PostMessage(hwnd, win32con.WM_PASTE, 0, 0)

        set_clipboard_text(text)
        paste_to_active_window()

    elif sys.platform == 'darwin':
        def set_clipboard_text_mac(text):
            p = subprocess.Popen(['pbcopy'], stdin=subprocess.PIPE)
            p.communicate(input=text.encode('utf-8'))

        def paste_in_active_app():
            script = '''
            tell application "System Events"
                keystroke "v" using command down
            end tell
            '''
            subprocess.call(['osascript', '-e', script])

        set_clipboard_text_mac(text)
        paste_in_active_app()
    else:
        raise NotImplementedError("Unsupported OS")

if __name__ == "__main__":
    # copy_selected_content()
    
    # clipboard_content = get_clipboard_content()
    # print(clipboard_content)
    
    screenshot_and_copy()

    # time.sleep(2)
    # input_text("Hello, this is a test. 你好，这是一个测试。")
    
    