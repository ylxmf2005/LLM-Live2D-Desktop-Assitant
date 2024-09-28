# YourElaina

Forked From [Open-LLM-VTuber](https://github.com/t41372/Open-LLM-VTuber) and make the following modifications / new features:

- Write a Elaina persona prompt.
- Set the [Elaina(LSS)](https://www.aplaybox.com/details/model/0MAXIOhAZAUw) as the default Live2D model and create some expressions and poses.
- Use [GPTSoVITS](https://github.com/RVC-Boss/GPT-SoVITS) as the TTS model.
- Improve `speak_by_sentence_chain` to concurrently TTS subsequent streaming sentences while the current sentence is being spoken.
- Add singing functionality using [Retrieval-based-Voice-Conversion](https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI).
- Disable the pointer following, fixed conflict between eyeblink and expressions.
- Reorganize structures to decouple and facilitate future development.


### Demo

https://github.com/user-attachments/assets/9848cbe6-6a57-45c6-b5a9-d350ae81dea8




### Usage

##### GPTSoVITS
1. Download the [Elaina GPTSoVITS model](https://www.bilibili.com/video/BV1Df421m7bm/).
2. Download [GPT-SoVITS-v2-240821](https://github.com/RVC-Boss/GPT-SoVITS/releases/tag/20240821v2), and configure the `GPT_SoVITS/configs/tts_infer.yaml` according to the official document.
3. run `runtime\python.exe api_v2.py`. 

##### YourElaina
1. `git clone https://github.com/ylxmf2005/YourElaina` 
2. `pip install requirements.txt` 
3. Modify `conf.yaml` according to your needs.
4. Launch [DeepLX](https://github.com/OwO-Network/DeepLX) server if you want Elaina to say Japanese (Because the model's responses usually use the same language as the system prompt/user's input), you can run `docker run -itd -p 1188:1188 ghcr.io/owo-network/deeplx:latest`.
5. `python server.py`

For more details, please read this [Wiki](https://github.com/t41372/Open-LLM-VTuber).



### To Do List

- Sync with the upstream repository.
- Enhance the UI by adding input field, chat history.
- Integrate with Electron to be the desktop partner.
- Add screen sensing capability.
- Improve the accuracy of determining whether the user has finished speaking.
- Add more expressions and poses.



### Acknowledgement

- Thank [t41372](https://github.com/t41372)  for the  [Open-LLM-VTuber](https://github.com/t41372/Open-LLM-VTuber).

- Thank [MNDIA](https://www.aplaybox.com/details/model/0MAXIOhAZAUw) for the Live2D model

- Thank [灰发的伊蕾娜](https://www.bilibili.com/video/BV1Df421m7bm/) for the GPTSoVITS model.

