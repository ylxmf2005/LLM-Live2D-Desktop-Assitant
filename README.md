# LLM-Live2D-Desktop-Assitant

Forked From [Open-LLM-VTuber](https://github.com/t41372/Open-LLM-VTuber) and make the following modifications / new features:

- Integrate with Electron to be the **desktop partner**. The desktop-mode supports both Windows and MacOS.
- Add **screen sensing** function and **clipboard content retrieval**.
- Write an Elaina **persona prompt**.
- Set the [Elaina(LSS)](https://www.aplaybox.com/details/model/0MAXIOhAZAUw) as the default **Live2D model** and create some **expressions and poses**.
- Use [GPTSoVITS](https://github.com/RVC-Boss/GPT-SoVITS) as the TTS model to **clone Elaina's timbre**.
- Improve `speak_by_sentence_chain` to **concurrently TTS** subsequent streaming sentences while the current sentence is being spoken.
- Add a **voice wake-up** feature. Elaina enters a sleep mode after a certain period (10s) of inactivity following each conversation chain. She can be reactivated using the wake word "Elaina".
- Add **singing functionality** using [Retrieval-based-Voice-Conversion](https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI).
- Add **computer use** function using Claude API.

### Demo

The demo video does not reflect the latest version.

https://github.com/user-attachments/assets/030bff1b-63a2-4b43-848b-a0c5b9db6f42

https://github.com/user-attachments/assets/77157c00-5be8-4f99-b549-b13ad113be52


https://github.com/user-attachments/assets/491714cd-5d59-44f4-b100-b4a89ca1d9e2


https://github.com/user-attachments/assets/58785339-34eb-4d5c-9413-f0e9f5810be0


https://github.com/user-attachments/assets/badca04a-5ece-478c-a175-5e4bc3f563df


https://github.com/user-attachments/assets/81c6cfb7-63cc-4983-a541-6dcaace1ad3c

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

##### Wake-up (if needed)
- Obtain your [Picovoice](https://console.picovoice.ai/) access key.
- Set the `accessKey` in `static/desktop/vad.js` to your own access key.

##### Desktop-mode
- `npm install`
- `npm start` or `npm run build`

##### Web-mode
- `python server.py --web`


### To Do List
- Sync with the upstream repository (Continuous work).
- Use smarter algorithms to detect if the user has stopped speaking.
- Enhance the UI by adding input field, chat history.
- Add more expressions and poses like random idle poses. 
- Allow the LLM to access the Internet.


### Acknowledgement

- Thank [t41372](https://github.com/t41372)  for the  [Open-LLM-VTuber](https://github.com/t41372/Open-LLM-VTuber).

- Thank [MNDIA](https://www.aplaybox.com/details/model/0MAXIOhAZAUw) for the Live2D model

- Thank [灰发的伊蕾娜](https://www.bilibili.com/video/BV1Df421m7bm/) for the GPTSoVITS model.

