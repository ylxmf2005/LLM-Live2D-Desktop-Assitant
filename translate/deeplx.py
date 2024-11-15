import httpx, json
from .translate_interface import TranslateInterface

class DeepLXTranslate(TranslateInterface):

    api_endpoint: str = "http://127.0.0.1:1188/v2/translate"
    target_lang: str = "JA"

    def __init__(self, api_endpoint: str, target_lang: str):
        self.api_endpoint = api_endpoint
        self.target_lang = target_lang

    # translate v2 endpoint from DeepLX
    def translate(self, text: str) -> str:
        try:
            data = {"text": [text], "target_lang": self.target_lang}
            post_data = json.dumps(data)
            req = httpx.post(url=self.api_endpoint, data=post_data).text
            res = json.loads(req)["translations"]
            res = " ".join([d["text"] for d in res])
        except Exception as e:
            print(f"Error translating text: {e}")
            print(f"Response: {req}")
            raise e

        return res
