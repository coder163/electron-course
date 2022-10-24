const { app, BrowserWindow, ipcMain } = require("electron")

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
            preload: path.join(__dirname, 'preload.js')
        }
    });
    win.once("ready-to-show", function () {
        win & win.show()
    })
    //加载页面
    win.loadFile('./index.html')


}



app.whenReady().then(function () {

    ipcMain.on('set-title', handleTitle)
    createWindow()
})

//set-title频道的回调函数
function handleTitle(event, title) {

    win.setTitle(title)

    event.reply('set-title-reply', '00000')

}