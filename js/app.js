'use strict';

const electron = require('electron');
const app = electron.app;           // Module to control application life.
const ipcMain = electron.ipcMain;   // IPC main
const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.

ipcMain.on('asynchronous-message', function(event, arg) {
    console.log(arg);
    event.sender.send('asynchronous-reply', 'pong');

    switch (arg) {
        case 'openDevTools()':
            mainWindow.openDevTools();
            break;
        default: console.log('command not found');
    }
});

ipcMain.on('synchronous-message', function(event, arg) {
  console.log(arg);
  event.returnValue = 'pong';
});
// Report crashes to our server.
require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
let mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
    if (process.platform != 'darwin')
        app.quit();
});

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', function() {

    // Create the browser window.
    mainWindow = new BrowserWindow({
        frame: true,
        width: 600,
        height: 300,
        'min-width': 500,
        'min-height': 200,
        'accept-first-mouse': true,
        'title-bar-style': 'hidden'
    });

    // Remove toolbar.
    mainWindow.setMenu(null);

    // and load the index.html of the app.
    mainWindow.loadURL('file://' + __dirname + '../../main.html');





    // Emitted when the window is closed.
    mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
    });
});
