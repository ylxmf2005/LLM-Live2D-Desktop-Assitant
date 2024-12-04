const chunkSize = 4096;

async function addAudioTask(audio_base64, instrument_base64, volumes, slice_length, text = null, expression_list = null) {
    console.log(`1. Adding audio task ${text} to queue`);
    
    if (window.state === "interrupted") {
        console.log("Skipping audio task due to interrupted state");
        return;
    }
    
    window.audioTaskQueue.addTask(() => {
        return new Promise((resolve, reject) => {
            playAudioLipSync(audio_base64, instrument_base64, volumes, slice_length, text, expression_list, onComplete=resolve);
        }).catch(error => {
            console.log("Audio task error:", error);
        });
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

function playAudioLipSync(audio_base64, instrument_base64, volumes, slice_length, text = null, expression_list = null, onComplete) {
    if (window.state === "interrupted") {
        console.error("Audio playback blocked. State:", window.state);
        onComplete();
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
    
    try {
        window.model2.speak("data:audio/wav;base64," + audio_base64, {
            expression: displayExpression,
            resetExpression: true,
            onFinish: () => {
                console.log("Voiceline is over");
                onComplete();
            },
            onError: (error) => {
                console.error("Audio playback error:", error);
                onComplete();
            }
        });
    } catch (error) {
        console.error("Speak function error:", error);
        onComplete();
    }
}
window.playAudioLipSync = playAudioLipSync;
