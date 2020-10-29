const {
    contextBridge,
    ipcRenderer
} = require("electron");


// add to the valid channels things you want to pass between electron on this website
contextBridge.exposeInMainWorld(
    "rpc", {
        post: (channel, data) => {
            // whitelist channels
            let validChannels = ["ping"];

            if (validChannels.includes(channel)) {

                ipcRenderer.send(channel, data);
            }
        },
        get: (channel, func) => {
            let validChannels = ["ping"];
            if (validChannels.includes(channel)) {
                // Deliberately strip event as it includes `sender` 
                ipcRenderer.on(channel, (event, ...args) => func(...args));
            }
        }
    }
);