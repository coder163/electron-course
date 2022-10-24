const { app, BrowserWindow } = require("electron")

//创建一个窗口
function createWindow() {
    //创建一个800*600的窗口
    let win = new BrowserWindow({
        width: 800,
        height: 600
    });

    //加载页面
    // win.loadFile('./index.html')
    win.loadURL('https://coder163.com')
}

app.whenReady().then(function () {
    createWindow()
})