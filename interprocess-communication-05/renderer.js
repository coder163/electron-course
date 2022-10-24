/**
 * 渲染进程中的js文件
 * ES2015的模块化语法，语法转换器(babel)
 */


let btn = document.querySelector('#btn')

btn.addEventListener('click', function () {
    // window.ipc.setTitle('hello---world')
    window.ipc.setTitleInvoke('hello---world00000')

    window.ipc.reply(function (event, args) {
        console.log(args)
    })
})
//主进程主动发送的消息
window.ipc.updateCounter(function (event, args) {
    console.log(args)
    //回复消息
    event.sender.send('update-counter-reply', '渲染进程收到，现在进行回复')
})