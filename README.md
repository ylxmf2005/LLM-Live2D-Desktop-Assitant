# ElainaDesktop

Forked From [Open-LLM-VTuber](https://github.com/t41372/Open-LLM-VTuber) and make the following modifications / new features:

- Integrate with Electron to be the **desktop partner**.
- Write a Elaina **persona prompt**.
- Set the [Elaina(LSS)](https://www.aplaybox.com/details/model/0MAXIOhAZAUw) as the default **Live2D model** and create some **expressions and poses**.
- Use [GPTSoVITS](https://github.com/RVC-Boss/GPT-SoVITS) as the TTS model to **clone Elaina's timbre**.
- Improve `speak_by_sentence_chain` to **concurrently TTS** subsequent streaming sentences while the current sentence is being spoken.
- Add **singing functionality** using [Retrieval-based-Voice-Conversion](https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI).
- Disable the pointer following, fixed conflict between eyeblink and expressions.
- Reorganize structures to decouple and facilitate future development.

### Demo


### Usage

##### GPTSoVITS (if needed)
- Download the [Elaina GPTSoVITS model](https://www.bilibili.com/video/BV1Df421m7bm/).
- Download [GPT-SoVITS-v2-240821](https://github.com/RVC-Boss/GPT-SoVITS/releases/tag/20240821v2), and configure the `GPT_SoVITS/configs/tts_infer.yaml` according to the official document.
- run `runtime\python.exe api_v2.py`. 

##### DeepLX (if needed)
- Launch [DeepLX](https://github.com/OwO-Network/DeepLX) server if you want Elaina to say Japanese (Because the model's responses usually use thesame language as the system prompt/user's input), you can run `docker run -itd -p 1188:1188  ghcr.io/owo-network/deeplx:latest`.

##### Environment Configuration
- `git clone https://github.com/ylxmf2005/YourElaina` 
- `pip install requirements.txt` 
- Modify `conf.yaml` according to your needs.

For more details, please read this [Wiki](https://github.com/t41372/Open-LLM-VTuber).

##### Desktop-mode
- `npm install`
- `npm start` or `npm run build`

##### Web-mode
- `python server.py`


### To Do List

- Fix audio missing bug.
- Sync with the upstream repository.
- Enhance the UI by adding input field, chat history.
- Add screen sensing capability.
- Improve the accuracy of determining whether the user has finished speaking.
- Add more expressions and poses.
- Add functionality of controlling computers, like [self-operating-computer](https://github.com/OthersideAI/self-operating-computer).



### Acknowledgement

- Thank [t41372](https://github.com/t41372)  for the  [Open-LLM-VTuber](https://github.com/t41372/Open-LLM-VTuber).

- Thank [MNDIA](https://www.aplaybox.com/details/model/0MAXIOhAZAUw) for the Live2D model

- Thank [灰发的伊蕾娜](https://www.bilibili.com/video/BV1Df421m7bm/) for the GPTSoVITS model.

