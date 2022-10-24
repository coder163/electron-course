/**
 * 渲染进程中的js文件
 * ES2015的模块化语法，语法转换器(babel)
 */


let btn = document.querySelector('#btn')

btn.addEventListener('click', function () {
    window.ipc.setTitle('hello---world')

    window.ipc.reply(function (event, args) {
        console.log(args)
    })
}) 