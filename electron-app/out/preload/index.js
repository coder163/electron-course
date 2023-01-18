"use strict";
const electron = require("electron");
const preload = require("@electron-toolkit/preload");
const api = {
  minimize() {
    electron.ipcRenderer.send("minimize");
  },
  restore(callback) {
    electron.ipcRenderer.send("restore");
    electron.ipcRenderer.on("onIsMax", function(event, val) {
      callback(val);
    });
  },
  close() {
    electron.ipcRenderer.send("close");
  }
};
if (process.contextIsolated) {
  try {
    electron.contextBridge.exposeInMainWorld("electron", preload.electronAPI);
    electron.contextBridge.exposeInMainWorld("api", api);
  } catch (error) {
    console.error(error);
  }
} else {
  window.electron = preload.electronAPI;
  window.api = api;
}
