const { contextBridge, ipcRenderer } = require('electron')



contextBridge.exposeInMainWorld('ipc', {

    'setTitle': function (title) {
        //向主进程的set-title通道发送消息，消息的内容hello-world
        ipcRenderer.send('set-title', title)


    },

    'reply': function (callback) {
        ipcRenderer.on('set-title-reply', callback)
    }
})

