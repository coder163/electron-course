const { contextBridge } = require('electron')

//沙盒化环境下测试nodejs API,Error: module not found: path
const path = require('path')

contextBridge.exposeInMainWorld('api', {

    'electron': process.versions.electron,

    'fullPath': path.resolve(__dirname)
})

//沙盒通过限制对大多数系统资源的访问来减少恶意代码可能造成的伤害， 一个沙盒化的渲染器不会有一个 Node.js 环境

//从Electron 20开始，默认启用沙盒化。它只能访问一组有限的 API

//预加载脚本主要作用是连接渲染进程和主进程，在沙盒化的环境下官方建议使用 进程间通讯 (inter-process communication, IPC) 委派任务给主进程的方式

//Node API的使用环境

//启用上下文隔离、禁用沙盒，可以在预加载脚本中使用，但是不能直接在渲染进程中使用

//禁用上文隔离、禁用沙盒、启用Node API 可以直接在渲染进程中使用

//推荐的方式启用沙盒、启用上文隔离