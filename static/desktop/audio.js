const chunkSize = 4096;

window.audioTaskQueue = new TaskQueue(100);

async function addAudioTask(audio_base64, instrument_base64, volumes, slice_length, text = null, expression_list = null) {
    console.log(`1. Adding audio task ${text} to queue`);

    const audioLength = await getAudioLength(audio_base64);
    console.log(`2. Audio length: ${audioLength}`);

    window.audioTaskQueue.addTask(async () => {
        playAudioLipSync(audio_base64, instrument_base64, volumes, slice_length, text, expression_list);
        await new Promise(resolve => setTimeout(resolve, audioLength + 100));
        console.log(`3. Audio task ${text} completed`);
    });
}
window.addAudioTask = addAudioTask;

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
    if (window.state === "interrupted") {
        console.error("Audio playback blocked. Sentence:", text);
        window.audioTaskQueue.clearQueue();
        return;
    }

    window.fullResponse += text;
    if (text) {
        document.getElementById("message").textContent = text;
    }

    if (instrument_base64 != "None") {
        const instrumentAudio = new Audio("data:audio/wav;base64," + instrument_base64);
        instrumentAudio.play();
    }

    const displayExpression = expression_list ? expression_list[0] : null;
    console.log("Start playing audio: ", text);
    if (window.model2 && typeof window.model2.speak === 'function') {
        window.model2.speak("data:audio/wav;base64," + audio_base64, { expression: displayExpression, resetExpression: false });
    }
}
window.playAudioLipSync = playAudioLipSync;
