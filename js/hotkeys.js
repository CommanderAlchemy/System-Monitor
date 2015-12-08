'use strict';

const ipcRenderer = require('electron').ipcRenderer;
const remote = require('remote');               // Get from main thread.
const electron = remote.require('electron');    // Get electron.
const globalShortcut = electron.globalShortcut; // Global shortcuts.

ipcRenderer.on('asynchronous-reply', function(event, arg) {
    console.log(arg); // prints "pong"
});

globalShortcut.register('ctrl+shift+c', function() {
    ipcRenderer.send('asynchronous-message', 'openDevTools()');
});

// To send synchronous-message
//console.log(ipcRenderer.sendSync('synchronous-message', 'ping')); // prints "pong"
