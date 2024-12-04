const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    onToggleSubtitles: (callback) => ipcRenderer.on('toggle-subtitles', (event, data) => callback(data)),
    onToggleMicrophone: (callback) => ipcRenderer.on('toggle-microphone', (event, data) => callback(data)),
    onToggleInterruption: (callback) => ipcRenderer.on('toggle-interruption', (event, data) => callback(data)),
    onToggleWakeUp: (callback) => ipcRenderer.on('toggle-wake-up', (event, data) => callback(data)),
    sendConfigFiles: (files) => ipcRenderer.send('update-config-files', files),
    onSwitchConfig: (callback) => ipcRenderer.on('switch-config', (event, data) => callback(data)),
    setIgnoreMouseEvents: (ignore) => ipcRenderer.send('set-ignore-mouse-events', ignore),
    showContextMenu: (x, y) => ipcRenderer.send('show-context-menu', x, y),
    updateMenuChecked: (label, checked) => ipcRenderer.send('update-menu-checked', label, checked),
    setSensitivity: (callback) => ipcRenderer.on('set-sensitivity', callback),
    updateSensitivity: (value) => ipcRenderer.send('update-sensitivity', value),
    
    getClipboardContent: () => ipcRenderer.invoke('get-clipboard-content'),
});