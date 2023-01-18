import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      //窗口最小化
      minimize(),
      //重置大小
      restore(callback: Function),
      //关闭窗口
      close()
    }
  }
}
