# pip install pyautogui pyautogui pillow pyobjc pywin32
import sys
import os
import uuid
import shutil
import base64
import subprocess

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
        import pyautogui
        pyautogui.hotkey('ctrl', 'c')
    elif sys.platform == 'darwin':
        subprocess.run(['osascript', '-e', 'tell application "System Events" to keystroke "c" using {command down}'])
    else:
        print("Unsupported platform for copy operation.")


if __name__ == "__main__":
    # copy_selected_content()
    
    clipboard_content = get_clipboard_content()
    
    print(clipboard_content)