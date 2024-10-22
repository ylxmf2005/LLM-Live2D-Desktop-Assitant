window.myvad = null;
window.previousTriggeredProbability = 0;

porcupine = null;
isWaitingForWakeWord = false;
let noSpeechTimeout = null;

async function init_vad() {
    window.myvad = await vad.MicVAD.new({
        preSpeechPadFrames: 10,
        onSpeechStart: () => {
            console.log("Speech start detected: " + window.previousTriggeredProbability);
            if (window.state === "thinking-speaking") {
                window.interrupt();
            } else {
                console.log("Not interrupted. Just normal conversation");
            }
            resetNoSpeechTimeout();
        },
        onFrameProcessed: (probs) => {
            if (probs["isSpeech"] > window.previousTriggeredProbability) {
                window.previousTriggeredProbability = probs["isSpeech"];
                resetNoSpeechTimeout();
            }
        },
        onVADMisfire: () => {
            console.log("VAD Misfire. The LLM can't hear you.");
            if (window.state === "interrupted") {
                window.setState("idle");
            }
            document.getElementById("message").textContent = "The LLM can't hear you.";
        },
        onSpeechEnd: (audio) => {
            if (!window.voiceInterruptionOn) {
                window.stop_mic();
            }
            if (window.ws && window.ws.readyState === WebSocket.OPEN) {
                window.sendAudioPartition(audio);
            }
            resetNoSpeechTimeout();
        }
    });
}

async function start_mic() {
    if (isWaitingForWakeWord) {
        await stop_wake_word_detection();
    }

    if (window.myvad == null) await init_vad();
    console.log("Mic start");
    window.myvad.start();
    window.electronAPI.updateMenuChecked("Microphone", true);
    resetNoSpeechTimeout();
}

window.start_mic = start_mic;

async function stop_mic() {
    console.log("Mic stop");
    if (window.myvad) {
        window.myvad.pause();
    }
    window.electronAPI.updateMenuChecked("Microphone", false);
    clearNoSpeechTimeout();
    await start_wake_word_detection();
}

window.stop_mic = stop_mic;

function interrupt() {
    console.log("Interrupting conversation chain");
    console.log("Sending: " + JSON.stringify({ type: "interrupt-signal", text: window.fullResponse }));
    if (window.ws && window.ws.readyState === WebSocket.OPEN) {
        window.ws.send(JSON.stringify({ type: "interrupt-signal", text: window.fullResponse }));
    }
    setState("interrupted");
    if (window.model2 && typeof window.model2.stopSpeaking === 'function') {
        window.model2.stopSpeaking();
    }
    if (window.audioTaskQueue && typeof window.audioTaskQueue.clearQueue === 'function') {
        window.audioTaskQueue.clearQueue();
    }
    console.log("Interrupted!!!!");
}

window.interrupt = interrupt;

async function start_wake_word_detection() {
    if (isWaitingForWakeWord) {
        console.log("Already waiting for wake word.");
        return;
    }

    if (window.WebVoiceProcessor.WebVoiceProcessor.isRecording) {
        await window.WebVoiceProcessor.WebVoiceProcessor.unsubscribe(porcupine);
        await porcupine.terminate();
    }

    console.log("Starting wake word detection...");
    isWaitingForWakeWord = true;
    
    accessKey = ""
    try {
        porcupine = await PorcupineWeb.PorcupineWorker.create(
            accessKey,
            {
                label:"伊蕾娜",
                publicPath: "desktop/伊蕾娜_zh_wasm_v3_0_0.ppn"
            },
            keywordDetectionCallback,
            {
                publicPath: "desktop/porcupine_params_zh.pv",
                forceWrite: true,
            }
        );
        await window.WebVoiceProcessor.WebVoiceProcessor.subscribe(porcupine);
    } catch (err) {
        console.log("Error starting wake word detection: " + err);
    }

    console.log("Wake word detection started.");
}

async function stop_wake_word_detection() {
    if (!isWaitingForWakeWord) return;

    console.log("Stopping wake word detection...");
    await window.WebVoiceProcessor.WebVoiceProcessor.unsubscribe(porcupine);
    await porcupine.release();
    await porcupine.terminate();
    porcupine = null;
    isWaitingForWakeWord = false;
    console.log("Wake word detection stopped.");
}

function keywordDetectionCallback(detection) {
    console.log(`Porcupine detected keyword: ${detection.label}`);
    if (detection.label === "伊蕾娜") {
        window.start_mic();
    }
}

function resetNoSpeechTimeout() {
    clearNoSpeechTimeout();
    noSpeechTimeout = setTimeout(() => {
        console.log("No speech detected for 10 seconds, stopping mic.");
        window.stop_mic();
    }, 10000);
}

function clearNoSpeechTimeout() {
    if (noSpeechTimeout) {
        clearTimeout(noSpeechTimeout);
        noSpeechTimeout = null;
    }
}

window.addEventListener("beforeunload", async () => {
    if (window.myvad) {
        window.myvad.release();
        window.myvad = null;
    }
    if (porcupine) {
        await stop_wake_word_detection();
    }
});