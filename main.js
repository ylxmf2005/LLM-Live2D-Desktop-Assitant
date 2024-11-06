const { app, BrowserWindow, Menu, Tray, ipcMain, screen, nativeImage } = require('electron');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

let mainWindow;
let tray = null;
let contextMenu; 
let currentConfigFile = '';
let configFiles = [];
const isMac = process.platform === 'darwin';

configFiles = [];

function updateContextMenu() {
  const configMenuItems = configFiles.map(configFile => {
    return {
      label: configFile,
      type: 'radio',
      checked: configFile === currentConfigFile,
      click: () => switchConfig(configFile)
    };
  });

  contextMenu = Menu.buildFromTemplate([
    { label: 'Show Subtitles', type: 'checkbox', checked: false, click: (menuItem) => toggleSubtitles(menuItem.checked) },
    { label: 'Microphone', type: 'checkbox', checked: true, click: (menuItem) => toggleMicrophone(menuItem.checked) },
    { label: 'Allow Interruption', type: 'checkbox', checked: true, click: (menuItem) => toggleInterruption(menuItem.checked) },
    { label: 'Wake-up', type: 'checkbox', checked: true, click: (menuItem) => toggleWakeUp(menuItem.checked) },
    { label: 'Hide', type: 'checkbox', checked: false, click: (menuItem) => toggleMinimize(menuItem.checked) },
    {
      label: 'Switch Config',
      submenu: configMenuItems
    },
    { type: 'separator' },
    { label: 'Quit', click: () => app.quit() },
  ]);

  if (tray) {
    tray.setContextMenu(contextMenu);
  }
}

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  mainWindow = new BrowserWindow({
    width: width,
    height: height,
    x: 0,
    y: 0,
    transparent: true,
    frame: false,
    resizable: false,
    alwaysOnTop: true,
    skipTaskbar: true,
    hasShadow: false,
    focusable: false,
    acceptFirstMouse: true,
    backgroundColor: '#00000000',
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

  if (isMac) mainWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });

  if (isMac) mainWindow.setIgnoreMouseEvents(true);
  else mainWindow.setIgnoreMouseEvents(true, { forward: true });
  mainWindow.setAlwaysOnTop(true, 'screen-saver');

  mainWindow.on('closed', function () {
    mainWindow = null;
  });

  createTray();
}

function createTray() {
  let iconPath = path.join(__dirname, 'static', 'pictures', 'icon.png');
  if (isMac) {
    trayIcon = nativeImage.createFromPath(iconPath).resize({ width: 16, height: 16 });
    tray = new Tray(trayIcon);
  } else {
    tray = new Tray(iconPath);
  }
  tray.setToolTip('Elaina');

  if (!contextMenu) {
    updateContextMenu();
  } else {
    tray.setContextMenu(contextMenu);
  }
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

function toggleWakeUp(isChecked) {
  mainWindow.webContents.send('toggle-wake-up', isChecked);
}

function toggleMinimize(isChecked) {
  if (isChecked) {
    mainWindow.minimize();
  } else {
    mainWindow.restore();
    mainWindow.setAlwaysOnTop(true, 'screen-saver');
  }
}

function switchConfig(configFile) {
  currentConfigFile = configFile;
  mainWindow.webContents.send('switch-config', configFile);
}

app.on('ready', () => {
  startBackend();
  setTimeout(() => {
    createWindow();
  }, 3000);
});

app.on('window-all-closed', function () {
  if (!isMac) {
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
  const pythonExecutable = 'python';
  const scriptPath = path.join(__dirname, 'server.py');
  backendProcess = spawn(pythonExecutable, [scriptPath], {
    cwd: __dirname,
    env: { ...process.env, PYTHONIOENCODING: 'utf-8' },
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
  if (isMac) mainWindow.setIgnoreMouseEvents(ignore);
  else mainWindow.setIgnoreMouseEvents(ignore, { forward: true });
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

ipcMain.on('update-config-files', (event, files) => {
  configFiles = files;
  updateContextMenu();
});