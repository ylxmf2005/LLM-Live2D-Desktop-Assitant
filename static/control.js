// 全局变量
let state = "idle"; // idle, thinking-speaking, interrupted
let voiceInterruptionOn = true;
let fullResponse = ""; // full response from the server in one conversation chain

// 初始化 Live2D
window.live2dModule.init().then(() => {
    window.live2dModule.loadModel(null).catch(error => {
        console.error("Failed to load Live2D model:", error);
    });
});

// 状态更新函数
function setState(newState) {
    state = newState;
    console.log(`State updated to: ${state}`);
}

// 中断函数
function interrupt() {
    console.log("😡👎 Interrupting conversation chain");
    console.log("Sending: " + JSON.stringify({ type: "interrupt-signal", text: fullResponse }));
    if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({ type: "interrupt-signal", text: fullResponse }));
    }
    setState("interrupted");
    if (model2 && typeof model2.stopSpeaking === 'function') {
        model2.stopSpeaking();
    }
    if (audioTaskQueue && typeof audioTaskQueue.clearQueue === 'function') {
        audioTaskQueue.clearQueue();
    }
    console.log("Interrupted!!!!");
}

// 语音激活检测（VAD）
let myvad;
let previousTriggeredProbability = 0;
async function init_vad() {
    myvad = await vad.MicVAD.new({
        preSpeechPadFrames: 10,
        onSpeechStart: () => {
            console.log("Speech start detected: " + previousTriggeredProbability);
            if (state === "thinking-speaking") {
                interrupt();
            } else {
                console.log("😀👍 Not interrupted. Just normal conversation");
            }
        },
        onFrameProcessed: (probs) => {
            if (probs["isSpeech"] > previousTriggeredProbability) {
                previousTriggeredProbability = probs["isSpeech"];
            }
        },
        onVADMisfire: () => {
            console.log("VAD Misfire. The LLM can't hear you.");
            if (state === "interrupted") {
                setState("idle");
            }
            document.getElementById("message").textContent = "The LLM can't hear you.";
        },
        onSpeechEnd: (audio) => {
            if (!voiceInterruptionOn) {
                stop_mic();
            }
            if (ws && ws.readyState === WebSocket.OPEN) {
                sendAudioPartition(audio);
            }
        }
    });
}

const chunkSize = 4096;
async function sendAudioPartition(audio) {
    console.log(audio);
    for (let index = 0; index < audio.length; index += chunkSize) {
        const endIndex = Math.min(index + chunkSize, audio.length);
        const chunk = audio.slice(index, endIndex);
        ws.send(JSON.stringify({ type: "mic-audio-data", audio: chunk }));
    }
    ws.send(JSON.stringify({ type: "mic-audio-end" }));
}

// WebSocket 连接
let ws;

function connectWebSocket() {
    ws = new WebSocket("ws://127.0.0.1:1017/client-ws");

    ws.onopen = function () {
        setState("idle");
        console.log("Connected to WebSocket");
    };

    ws.onclose = function () {
        setState("idle");
        console.log("Disconnected from WebSocket");
        if (audioTaskQueue) {
            audioTaskQueue.clearQueue();
        }
    };

    ws.onmessage = function (event) {
        handleMessage(JSON.parse(event.data));
    };

    ws.onerror = function (error) {
        console.error("WebSocket error:", error);
    };
}

function handleMessage(message) {
    console.log("Received Message: ", message);
    switch (message.type) {
        case "full-text":
            document.getElementById("message").textContent = message.text;
            console.log("full-text: ", message.text);
            break;
        case "control":
            switch (message.text) {
                case "start-mic":
                    start_mic();
                    break;
                case "stop-mic":
                    stop_mic();
                    break;
                case "conversation-chain-start":
                    setState("thinking-speaking");
                    fullResponse = "";
                    break;
                case "conversation-chain-end":
                    setState("idle");
                    setExpression(0);
                    if (!voiceInterruptionOn) {
                        start_mic();
                    }
                    break;
            }
            break;
        case "expression":
            setExpression(message.text);
            break;
        case "mouth":
            setMouth(Number(message.text));
            break;
        case "audio":
            if (state == "interrupted") {
                console.log("Audio playback intercepted. Sentence:", message.text);
            } else {
                addAudioTask(message.audio, message.instrument, message.volumes, message.slice_length, message.text, message.expressions);
            }
            break;
        case "set-model":
            // 根据需要处理模型设置
            break;
        case "listExpressions":
            console.log(listSupportedExpressions());
            break;
        default:
            console.error("Unknown message type: " + message.type);
            console.log(message);
    }
}

// 设置模型表达式
function setExpression(expressionIndex) {
    expressionIndex = parseInt(expressionIndex);
    if (model2 && model2.internalModel.motionManager.expressionManager) {
        model2.internalModel.motionManager.expressionManager.setExpression(expressionIndex);
        console.info(`>> [x] -> Expression set to: (${expressionIndex})`);
    }
}

// 设置嘴部参数
function setMouth(mouthY) {
    if (model2 && model2.internalModel.coreModel) {
        if (typeof model2.internalModel.coreModel.setParameterValueById === 'function') {
            model2.internalModel.coreModel.setParameterValueById('ParamMouthOpenY', mouthY);
        } else {
            model2.internalModel.coreModel.setParamFloat('PARAM_MOUTH_OPEN_Y', mouthY);
        }
    }
}

// 音频任务队列
window.audioTaskQueue = new TaskQueue(500);

async function addAudioTask(audio_base64, instrument_base64, volumes, slice_length, text = null, expression_list = null) {
    console.log(`1. Adding audio task ${text} to queue`);

    const audioLength = await getAudioLength(audio_base64);
    console.log(`2. Audio length: ${audioLength}`);

    audioTaskQueue.addTask(async () => {
        playAudioLipSync(audio_base64, instrument_base64, volumes, slice_length, text, expression_list);
        await new Promise(resolve => setTimeout(resolve, audioLength));
        console.log(`3. Audio task ${text} completed`);
    });
}

async function getAudioLength(audio_base64) {
    return new Promise((resolve) => {
        const audio = new Audio("data:audio/wav;base64," + audio_base64);
        audio.onloadedmetadata = () => {
            const audioDur = audio.duration * 1000;
            resolve(audioDur);
        };
    });
}

function playAudioLipSync(audio_base64, instrument_base64, volumes, slice_length, text = null, expression_list = null) {
    if (state === "interrupted") {
        console.error("Audio playback blocked. Sentence:", text);
        audioTaskQueue.clearQueue();
        return;
    }

    fullResponse += text;
    if (text) {
        document.getElementById("message").textContent = text;
    }

    if (instrument_base64 != "None") {
        const instrumentAudio = new Audio("data:audio/wav;base64," + instrument_base64);
        instrumentAudio.play();
    }

    const displayExpression = expression_list ? expression_list[0] : null;
    console.log("Start playing audio: ", text);
    if (model2 && typeof model2.speak === 'function') {
        model2.speak("data:audio/wav;base64," + audio_base64, { expression: displayExpression, resetExpression: false });
    }
}

// 开始和停止麦克风
async function start_mic() {
    if (myvad == null) await init_vad();
    console.log("Mic start");
    myvad.start();
    // 更新界面元素（如果有需要）
}

function stop_mic() {
    console.log("Mic stop");
    if (myvad) {
        myvad.pause();
    }
    // 更新界面元素（如果有需要）
}

// 暴露函数和变量到全局
window.start_mic = start_mic;
window.stop_mic = stop_mic;
window.voiceInterruptionOn = voiceInterruptionOn;

// 监听 Electron 主进程的设置变化
window.electronAPI.onToggleSubtitles((isChecked) => {
    const messageDiv = document.getElementById('message');
    if (isChecked) {
        messageDiv.classList.remove('hidden');
    } else {
        messageDiv.classList.add('hidden');
    }
});

window.electronAPI.onToggleMicrophone((isChecked) => {
    if (isChecked) {
        start_mic();
    } else {
        stop_mic();
    }
});

window.electronAPI.onToggleInterruption((isChecked) => {
    voiceInterruptionOn = isChecked;
});

const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// 初始化 WebSocket 连接
connectWebSocket();

// 处理鼠标事件，实现点击穿透
let isMouseOverModel = false;

document.addEventListener('mousemove', (event) => {
    isMouseOverModel = checkIfMouseOverModel(event.clientX, event.clientY);
    window.electronAPI.sendIgnoreMouseEvents(!isMouseOverModel);
});

function checkIfMouseOverModel(x, y) {
    const pixel = document.elementFromPoint(x, y);
    return pixel && pixel.id === 'canvas';
}



