var io = require('socket.io-client');
var socket = io.connect('https://websockets-playground-2020.herokuapp.com/',
    {reconnect: true, transports : ['websocket'], path: '/socket.io'});

    console.log("PI on")
socket.on('connect', function (socket) {
    console.log('Connected!');
    
});
socket.on('time', function (timeString) {
    console.log(`Message from server: ${timeString}`);
});
setInterval(() => socket.emit('piMessage', 'Hello from PI', 1000));