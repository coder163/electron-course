import { ipcRenderer } from "electron";

export default {
    //窗口最小化
    minimize() {
        ipcRenderer.send('minimize');

    },
    //重置大小
    restore(callback: Function) {
        //发送消息
        ipcRenderer.send('restore');
        //接收消息
        ipcRenderer.on('onIsMax', function (event, val) {
            callback(val)
        })

    },
    //关闭窗口
    close() {
        ipcRenderer.send('close');
    },

}