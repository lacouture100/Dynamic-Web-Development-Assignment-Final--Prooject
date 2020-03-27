var io = require('socket.io-client');
const socketIO = require('socket.io');
var ip = require('ip');
 
let myIp = ip.address();

let localURL = 'http://192.168.106.153';
let herokuURL = 'https://websockets-playground-2020.herokuapp.com/';


var socket = io.connect(localURL, {
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

setInterval(() => socket.emit('piMsg', `Hello from pi`, 1000));
console.log(`message sent`)