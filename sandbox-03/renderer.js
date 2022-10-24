/**
 * 渲染进程中的js文件
 */

//获取span标签
let span = document.querySelector('#version')


// span.innerHTML = window.api.electron

// document.querySelector('#full-path').innerHTML = window.api.fullPath

//禁用上文隔离、禁用沙盒、启用Node API 可以直接在渲染进程中使用
const path = require('path')

console.log(path.resolve(__dirname))