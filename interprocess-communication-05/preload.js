const { contextBridge, ipcRenderer } = require('electron')



contextBridge.exposeInMainWorld('ipc', {
    'setTitleInvoke': function (title) {
        //向主进程的set-title通道发送消息，消息的内容hello-world
        //  ipcRenderer.send('set-title', title)
        ipcRenderer.invoke('invoke:set-title', title)

    },
    'setTitle': function (title) {
        //向主进程的set-title通道发送消息，消息的内容hello-world
        ipcRenderer.send('set-title', title)

    },

    'reply': function (callback) {
        ipcRenderer.on('set-title-reply', callback)
    },
    //监听主进程发送的消息
    'updateCounter': function (callback) {
        ipcRenderer.on('update-counter', callback)
    }
})

