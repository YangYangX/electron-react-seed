import * as path from 'path';
import { app, BrowserWindow, screen } from 'electron';
import installExtension, {
    REACT_DEVELOPER_TOOLS,
    REDUX_DEVTOOLS,
} from 'electron-devtools-installer';

/******************************************************************************* */
/**
 * reload windows when src has a update.
 */
const args = process.argv.slice(1);
const serve = args.some(val => val === '--serve');

if (serve) {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, '../node_modules', '.bin', 'electron'),
    });
}
/******************************************************************************* */

// 保持对window对象的全局引用，如果不这么做的话，当JavaScript对象被
// 垃圾回收的时候，window对象将会自动的关闭
let mainWindow = null;

const mainWindowMinWidth = 1280;
const mainWindowMinHeight = 800;

function createWindow() {
    installExtension(REACT_DEVELOPER_TOOLS)
        .then(name => console.log(`Added Extension:  ${name}`))
        .catch(err => console.log('An error occurred: ', err));

    installExtension(REDUX_DEVTOOLS)
        .then(name => console.log(`Added Extension:  ${name}`))
        .catch(err => console.log('An error occurred: ', err));

    // 创建浏览器窗口。
    const electronScreen = screen;
    const size = electronScreen.getPrimaryDisplay().workAreaSize;

    mainWindow = new BrowserWindow({
        x: (size.width - mainWindowMinWidth) / 2,
        y: (size.height - mainWindowMinHeight) / 2,
        width: mainWindowMinWidth,
        height: mainWindowMinHeight,
        minWidth: mainWindowMinWidth,
        minHeight: mainWindowMinHeight,
        show: false,
    });

    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });

    // disable windows default menu
    if (process.platform == 'win32') {
        mainWindow.setMenu(null);
    }

    // 然后加载应用的 index.html。
    mainWindow.loadFile(path.join(__dirname, 'electron-react-seed/index.html'));

    // 打开开发者工具
    mainWindow.webContents.openDevTools();

    // 当 window 被关闭，这个事件会被触发。
    mainWindow.on('closed', () => {
        // 取消引用 window 对象，如果你的应用支持多窗口的话，
        // 通常会把多个 window 对象存放在一个数组里面，
        // 与此同时，你应该删除相应的元素。
        mainWindow = null;
    });
}

// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。
app.on('ready', createWindow);

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
    // 否则绝大部分应用及其菜单栏会保持激活。
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // 在macOS上，当单击dock图标并且没有其他窗口打开时，
    // 通常在应用程序中重新创建一个窗口。
    if (mainWindow === null) {
        createWindow();
    }
});

// 在这个文件中，你可以续写应用剩下主进程代码。
// 也可以拆分成几个文件，然后用 require 导入。
