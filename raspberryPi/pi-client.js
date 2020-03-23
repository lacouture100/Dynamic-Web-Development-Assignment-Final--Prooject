var io = require('socket.io-client');
var socket = io.connect('https://websockets-playground-2020.herokuapp.com/',
    {reconnect: true, transports : ['websocket'], path: '/socket.io'});

    console.log("PI on")
socket.on('connect', function (socket) {
    console.log('Connected!');
});


setInterval(() => io.emit('piMessage', 'Hello from PI', 1000));