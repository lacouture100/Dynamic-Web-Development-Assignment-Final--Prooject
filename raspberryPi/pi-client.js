var io = require('socket.io-client');
var socket = io.connect('https://https://websockets-playground-2020.herokuapp.com/',
    {reconnect: true, transports : ['websocket'], path: '/socket.io'});

socket.on('connect', function (socket) {
    console.log('Connected!');
});