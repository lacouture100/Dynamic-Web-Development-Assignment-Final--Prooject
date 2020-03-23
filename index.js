//Install dependencies
const express = require('express');
const socketIO = require('socket.io');
const INDEX = 'views/index.html'; // Define the index.html file address
const PORT= process.env.PORT ||3000;
let messageInterval = 1000; // counted in milliseconds
let timestamp;
let connectedDevices = [];

///////////////////////////////////////////////////////////////////////////

/*We need an HTTP server to serve our client-side assets and 
provide a hook for the WebSocket server to monitor for requests. */
const server = express()
  .use((req, res) => res.sendFile(INDEX, {
    root: __dirname
  }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

/*The Socket.io server takes an HTTP server as 
an argument so that it can listen for socket.io-related requests*/
const io = socketIO(server);

//Callback event when any client connects
io.on('connection', (socket) => {
  console.log(`Client connected in socket ${socket.id}.`)
  connectedDevices.push(socket.id);
  //Callback event when the client disconnects
  socket.on('disconnect', () => connectedDevices.filter(socket=>socket.id));
});

//Message from Raspberry Pi to server.
io.on('piMsg', (message) => {
  console.log(`Received pi message from ${socket.id}.`)
  console.log(`message: ${piMsg}.`)

  //Callback event when the pi disconnects
  socket.on('disconnect', () => console.log(`Pi disconnected from socket ${socket.id}.`));
});

//Message from Raspberry Pi to server.
io.on('webMsg', (socket) => {
  console.log(`Received webclient message from ${socket.id}.`)

  //Callback event when the webclient disconnects
  socket.on('disconnect', () => console.log(`Webclient disconnected from socket ${socket.id}.`));
});

timestamp = new Date().toTimeString();

/*This will send an event called 'time' to each client. 
The event will have the actual time attached.*/
setInterval(() => io.emit('time', timestamp, 1000));




