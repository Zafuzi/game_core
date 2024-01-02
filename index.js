const path = require("path");

const {
	app,
	BrowserWindow,
	screen,
	ipcMain,
} = require('electron');

var dev = process.env.APP_DEV ? (process.env.APP_DEV.trim() === "true") : false;

if (dev) {
	try {
		require('electron-reloader')(module);
	} catch (e) {
		console.log(e);
	}
}

let win;

function createWindow() {
	let displays = screen.getAllDisplays();
	let width = dev ? displays[0].bounds.width / 2 : 1600;
	let height = dev ? displays[0].bounds.height : 900;
	let x = dev ? displays[0].bounds.width / 2 : (displays[0].bounds.width / 2) - width / 2;
	let y = dev ? 0 : (displays[0].bounds.height / 2) - height / 2;
	win = new BrowserWindow({
		width: width,
		height: height,
		x: x,
		y: y,
		title: "Game",
		autoHideMenuBar: true,
		backgroundColor: "#fff",
		fullscreenable: true,
		webPreferences: {
			contextIsolation: true,
			nodeIntegration: true,
			preload: path.join(__dirname, 'src/preload.js'),
		},

	})

	win.loadFile('src/index.html')

	if (dev) {
		win.webContents.openDevTools()
	}
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow()
	}
})

ipcMain.on("ping", (evt, args) => {
	win.webContents.send("ping", "Electron says hello");
})