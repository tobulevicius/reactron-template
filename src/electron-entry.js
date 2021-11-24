const electron = require('electron')
const app = electron.app
const isDev = require('electron-is-dev');
require('electron-reload');
const BrowserWindow = electron.BrowserWindow
const path = require('path')

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ 
	  	width: 1600, 
		height: 900, 
		title: 'A.R.P', 
		titleBarStyle: 'hidden',
		titleBarOverlay: {
			color: '#111',
			symbolColor: '#f2f2f2'
		}}
	)
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`)

  mainWindow.removeMenu();
  mainWindow.setBackgroundColor('#111')

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

// Create the window.
app.on('ready', createWindow)

// Kill it properly.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// Create the main window if it hasn't already.
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})