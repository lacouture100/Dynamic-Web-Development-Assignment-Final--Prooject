//Install dependencies
const express = require('express');
const socketIO = require('socket.io');
const INDEX = 'views/index.html'; // Define the index.html file address
const PORT= process.env.PORT ||3000;
let messageInterval = 1000; // counted in milliseconds

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

//Callback event when the client connects
io.on('connection', (socket) => {
  console.log(`Client connected in socket ${socket.id}.`)
  console.log(socket.connected) 
  //Callback event when the client disconnects
  socket.on('disconnect', () => console.log(`Client disconnected from socket ${socket.id}.`));
});

/*This will send an event called 'time' to each client. 
The event will have the actual time attached.*/
setInterval(() => io.emit('time', new Date().toTimeString()), 1000);