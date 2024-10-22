const { app, BrowserWindow, Menu, Tray, ipcMain } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

let mainWindow;
let tray = null;
let backendProcess;

const contextMenu = Menu.buildFromTemplate([
  { label: 'Show Subtitles', type: 'checkbox', checked: false, click: (menuItem) => toggleSubtitles(menuItem.checked) },
  { label: 'Microphone', type: 'checkbox', checked: true, click: (menuItem) => toggleMicrophone(menuItem.checked) },
  { label: 'Allow Interruption', type: 'checkbox', checked: true, click: (menuItem) => toggleInterruption(menuItem.checked) },
  { type: 'separator' },
  { label: 'Quit', click: () => app.quit() },
]);


function createWindow() {
  mainWindow = new BrowserWindow({
    fullscreen: true,
    transparent: true,
    frame: false,
    resizable: false,
    alwaysOnTop: true,
    skipTaskbar: true,
    hasShadow: false, 
    webPreferences: {
      preload: path.join(__dirname, 'static', 'desktop', 'preload.js'),
      contextIsolation: true,
      nodeIntegration: true,
      enableRemoteModule: true,
      sandbox: false,
    },
  });

  mainWindow.loadFile(path.join(__dirname, 'static', 'desktop.html'));
  // mainWindow.webContents.openDevTools();

  mainWindow.setIgnoreMouseEvents(true, { forward: true });
  mainWindow.setAlwaysOnTop(true, 'screen-saver');

  mainWindow.on('closed', function () {
    mainWindow = null;
  });

  createTray();
}

function createTray() {
  tray = new Tray(path.join(__dirname, 'static', 'pictures', 'icon.png'));
  tray.setToolTip('Elaina');
  tray.setContextMenu(contextMenu);
}

function toggleSubtitles(isChecked) {
  mainWindow.webContents.send('toggle-subtitles', isChecked);
}

function toggleMicrophone(isChecked) {
  mainWindow.webContents.send('toggle-microphone', isChecked);
}

function toggleInterruption(isChecked) {
  mainWindow.webContents.send('toggle-interruption', isChecked);
}

app.on('ready', () => {
  startBackend();
  setTimeout(() => {}, 1000);
  createWindow();
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on('will-quit', () => {
  stopBackend();
});

function startBackend() {
  const scriptPath = path.join(__dirname, 'server.py');
  backendProcess = spawn('python', [scriptPath], {
    cwd: __dirname,
    env: { ...process.env, PYTHONIOENCODING: 'utf-8' }
  });

  backendProcess.stdout.on('data', (data) => {
    process.stdout.write(`${data}`);
  });

  backendProcess.stderr.on('data', (data) => {
    process.stdout.write(`${data}`);
  });

  backendProcess.on('close', (code) => {
    process.stdout.write(`${code}`);
  });
}

function stopBackend() {
  if (backendProcess) {
    backendProcess.kill();
    backendProcess = null;
  }
}

ipcMain.on('set-ignore-mouse-events', (event, ignore) => {
  mainWindow.setIgnoreMouseEvents(ignore, { forward: true });
});

ipcMain.on('show-context-menu', (event, x, y) => {
  contextMenu.popup({
    window: mainWindow,
    x: x,
    y: y,
  });
});

ipcMain.on('update-menu-checked', (event, label, checked) => {
  const menuItem = contextMenu.items.find(item => item.label === label);
  if (menuItem) {
    menuItem.checked = checked;
    Menu.setApplicationMenu(Menu.buildFromTemplate(contextMenu.items));
    tray.setContextMenu(contextMenu);
  }
});