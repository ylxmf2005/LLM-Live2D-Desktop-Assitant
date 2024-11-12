let micStateBeforeConfigSwitch = null;
window.state = "idle"; // idle, thinking-speaking, interrupted
window.voiceInterruptionOn = true;
window.fullResponse = ""; // full response from the server in one conversation chain

function setState(newState) {
    window.state = newState;
    console.log(`State updated to: ${window.state}`);
}
window.setState = setState;

async function sendAudioPartition(audio) {
    console.log(audio);
    for (let index = 0; index < audio.length; index += chunkSize) {
        const endIndex = Math.min(index + chunkSize, audio.length);
        const chunk = audio.slice(index, endIndex);
        window.ws.send(JSON.stringify({ type: "mic-audio-data", audio: chunk }));
    }
    window.ws.send(JSON.stringify({ type: "mic-audio-end" }));
}
window.sendAudioPartition = sendAudioPartition;

window.ws = null;

function connectWebSocket() {
    return new Promise((resolve, reject) => {
        window.ws = new WebSocket("ws://127.0.0.1:1017/client-ws");

        window.ws.onopen = function () {
            setState("idle");
            console.log("Connected to WebSocket");
            resolve();
        };

        window.ws.onclose = function () {
            setState("idle");
            console.log("Disconnected from WebSocket");
            if (window.audioTaskQueue) {
                window.audioTaskQueue.clearQueue();
            }
        };

        window.ws.onmessage = function (event) {
            handleMessage(JSON.parse(event.data));
        };

        window.ws.onerror = function (error) {
            console.error("WebSocket error:", error);
            reject(error);
        };
    });
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
                    window.start_mic();
                    break;
                case "stop-mic":
                    window.stop_mic();
                    break;
                case "conversation-chain-start":
                    setState("thinking-speaking");
                    window.fullResponse = "";
                    break;
                case "conversation-chain-end":
                    setState("idle");
                    setExpression(0);
                    if (!window.voiceInterruptionOn) {
                        window.start_mic();
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
            if (window.state == "interrupted") {
                console.log("Audio playback intercepted. Sentence:", message.text);
            } else {
                window.addAudioTask(message.audio, message.instrument, message.volumes, message.slice_length, message.text, message.expressions);
                window.setExpression(0);
            }
            break;
        case "set-model":
            window.live2dModule.init().then(() => {
                window.live2dModule.loadModel(message.text).catch(error => {
                    console.error("Failed to load Live2D model:", error);
                });
              });
            break;
        case "listExpressions":
            console.log(listSupportedExpressions());
            break;
        case "config-files":
            console.log("Received config files");
            window.electronAPI.sendConfigFiles(message.files);
            break;
        case "config-switched":
            console.log(message.message);
            document.getElementById("message").textContent = "Configuration switched successfully!";
            setState("idle");

            if (micStateBeforeConfigSwitch) {
                start_mic();
            }
            micStateBeforeConfigSwitch = null;  // reset the state
            break;        
        default:
            console.error("Unknown message type: " + message.type);
            console.log(message);
    }
}

function fetchConfigurations() {
    if (window.ws && window.ws.readyState === WebSocket.OPEN) {
        window.ws.send(JSON.stringify({ type: "fetch-configs" }));
        console.log("Fetching configurations");
    } else {
        console.error("WebSocket is not open. Cannot fetch configurations.");
    }
}

function switchConfig(configFile) {
    setState("switching-config");
    document.getElementById("message").textContent = "Switching configuration...";
    
    micStateBeforeConfigSwitch = micToggleState;
    if (micToggleState) {
        stop_mic();
    }
    window.interrupt();
    window.ws.send(JSON.stringify({ type: "switch-config", file: configFile }));
}

window.handleMessage = handleMessage;
window.switchConfig = switchConfig;
window.fetchConfigurations = fetchConfigurations;

async function initialize() {
    try {
        await connectWebSocket();
        fetchConfigurations();
    } catch (error) {
        console.error("Failed to initialize:", error);
    }
}

initialize();

window.connectWebSocket = connectWebSocket;