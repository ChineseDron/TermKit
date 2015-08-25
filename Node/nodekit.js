#!/usr/bin/env node
var termkit = {
  version: 1,
};

// Load requirements.
var http = require('http'),
    io = require('socket.io'),
    router = require("./router"),
    connect = require('connect');

// Load config file.
var config = require('./config').getConfig();

// Set up http server.
app = connect().use(connect.static(__dirname+'/../HTML'));
server = http.createServer(app);
server.listen(2222);

// Set up WebSocket and handlers.
var socket = io.listen(server);
socket.on('connection', function (client) {
  var p = new router.router(client);
});
