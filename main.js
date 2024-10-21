// main.js
const { app, BrowserWindow, Menu, Tray, ipcMain } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

let mainWindow;
let tray = null;
let backendProcess;

const contextMenu = Menu.buildFromTemplate([
  { label: '显示字幕', type: 'checkbox', checked: false, click: (menuItem) => toggleSubtitles(menuItem.checked) },
  { label: '麦克风', type: 'checkbox', checked: true, click: (menuItem) => toggleMicrophone(menuItem.checked) },
  { label: '允许打断', type: 'checkbox', checked: true, click: (menuItem) => toggleInterruption(menuItem.checked) },
  { type: 'separator' },
  { label: '退出', click: () => app.quit() },
]);

function createWindow() {
  mainWindow = new BrowserWindow({
    // width: 800,
    // height: 600,
    fullscreen: true,
    transparent: true,
    frame: false,
    resizable: false,
    alwaysOnTop: true,
    skipTaskbar: true,
    hasShadow: false, // 确保窗口没有阴影
    webPreferences: {
      preload: path.join(__dirname, 'static', 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false, 
      enableRemoteModule: false,
    },
  });

  mainWindow.loadFile(path.join(__dirname, 'static', 'desktop.html'));
  //mainWindow.webContents.openDevTools();

  // 初始时忽略鼠标事件，允许事件穿透
  mainWindow.setIgnoreMouseEvents(true, { forward: true });
  mainWindow.setAlwaysOnTop(true, 'screen-saver');

  mainWindow.on('closed', function () {
    mainWindow = null;
  });

  // 创建系统托盘
  createTray();
}


function createTray() {
  tray = new Tray(path.join(__dirname, 'static', 'icon.png'));
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
  // 启动后端服务器
  startBackend();
  createWindow();
});

app.on('window-all-closed', function () {
  // 对于 macOS，一般在关闭窗口时不退出应用
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
  // 退出应用时，停止后端进程
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