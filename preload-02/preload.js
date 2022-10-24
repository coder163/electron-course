// const { contextBridge } = require('electron')



// contextBridge.exposeInMainWorld('api', {
//     'electron': process.versions.electron
// })

//自 Electron 12 以来，默认情况下已启用上下文隔离

//运行在所加载的 webcontent网页 之外的另一个独立的上下文环境里。预加载脚本访问的 window 对象并不是网站所能访问的对象

window.uname = 'xiaohei'