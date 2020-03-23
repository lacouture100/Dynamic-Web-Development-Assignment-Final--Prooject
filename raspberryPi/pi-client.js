var io = require('socket.io-client');
const socketIO = require('socket.io');
var ip = require('ip');
 
let myIp = ip.address();


var socket = io.connect('https://websockets-playground-2020.herokuapp.com/', {
    reconnect: true,
    transports: ['websocket'],
    path: '/socket.io'
});

console.log("Pi is on")
socket.on('connect', function (socket) {
    console.log('Connected!');
});
socket.on('time', function (timeString) {
    console.log(`Message from server: ${timeString}`);
});

socket.on('webMsg', function (message) {
    console.log(`Message from WebClient: ${message}`);
});

setInterval(() => socket.emit('piMsg', `${myIp}`, 1000));
console.log(`message sent`)