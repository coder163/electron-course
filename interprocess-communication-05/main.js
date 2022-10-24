const { app, BrowserWindow, ipcMain, Menu } = require("electron")

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
    //构建菜单模板
    const menu = Menu.buildFromTemplate([
        {
            label: '主进程到渲染进程',
            submenu: [
                {

                    label: '发送',
                    click: function () {
                        win.webContents.send('update-counter', 1)
                    }
                }
            ]
        }

    ])
    //设置应用菜单
    Menu.setApplicationMenu(menu)
    //加载页面
    win.loadFile('./index.html')


}



app.whenReady().then(function () {

    ipcMain.on('set-title', handleTitle)

    ipcMain.on('update-counter-reply', function (event, args) {
        console.log(args)
    })
    //官方建议采用这个
    ipcMain.handle('invoke:set-title', function (event, args) {

        console.log(args)
        event.sender.send('set-title-reply', '00000')
    })

    createWindow()
})

//set-title频道的回调函数
function handleTitle(event, title) {

    win.setTitle(title)

    event.reply('set-title-reply', '00000')

}