window.electronAPI.onToggleSubtitles((isChecked) => {
    const messageDiv = document.getElementById('message');
    if (isChecked) {
        messageDiv.classList.remove('hidden');
    } else {
        messageDiv.classList.add('hidden');
    }
});

window.electronAPI.onToggleWakeUp((isChecked) => {
    window.wakeWordDetectionOn = isChecked;
    if (isChecked) {
        window.start_wake_word_detection();
    } else {
        window.stop_wake_word_detection();
    }
});

window.electronAPI.onToggleMicrophone((isChecked) => {
    if (isChecked) {
        window.start_mic();
    } else {
        window.stop_mic();
    }
});

window.electronAPI.onToggleInterruption((isChecked) => {
    window.voiceInterruptionOn = isChecked;
});

window.electronAPI.onSwitchConfig((configFile) => {
   window.switchConfig(configFile);
});

window.electronAPI.onSetSensitivity((value) => {
    const sensitivityInput = document.getElementById('speechProbThreshold');
    if (sensitivityInput) {
        sensitivityInput.value = Math.round(value * 100);
        window.updateSensitivity(sensitivityInput.value);
    }
});

let isMouseOverModel = false;

// document.addEventListener('mousemove', (event) => {
//     isMouseOverModel = checkIfMouseOverModel(event.clientX, event.clientY);
//     window.electronAPI.setIgnoreMouseEvents(!isMouseOverModel);
// });

function checkIfMouseOverModel(x, y) {
    const pixel = document.elementFromPoint(x, y);
    return pixel && pixel.id === 'canvas';
}

const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
