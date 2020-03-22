'use strict';

const express = require('express');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;
const INDEX = '/index_heroku.html';

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${3000}`));

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log(`Client connected in socket ${socket.id}.`) 
  console.log(socket.connected) //<---the property no longer exists
  socket.on('disconnect', () => console.log('Client disconnected'));
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);