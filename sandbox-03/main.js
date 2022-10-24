const { app, BrowserWindow } = require("electron")

const path = require('path')

let win
//创建一个窗口
function createWindow() {
    //创建一个800*600的窗口
    win = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,      //显示窗口
        webPreferences: {
            nodeIntegration: true,//启用渲染进程中的 Node API
            contextIsolation: false, //禁用上下文隔离
            sandbox: false,//禁用沙盒化
            // preload: path.join(__dirname, 'preload.js')
        }
    });
    win.once("ready-to-show", function () {
        win & win.show()
    })
    //加载页面
    win.loadFile('./index.html')


}



app.whenReady().then(function () {
    createWindow()
})