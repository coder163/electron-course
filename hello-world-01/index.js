const { app, BrowserWindow } = require("electron")

let win
//创建一个窗口
function createWindow() {
    //创建一个800*600的窗口
    win = new BrowserWindow({
        width: 800,
        height: 600,
        show: false      //显示窗口
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