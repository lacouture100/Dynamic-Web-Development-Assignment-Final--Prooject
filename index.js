const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {

	console.log(`User connected in socket ${socket.id}`);
	socket.emit('message', 'recieved message');
	//handle when a user disconnects
	socket.on('disconnect', function () {
		console.log(`User disconnected in socket ${socket.id} `);
	});
	//receive messages with the 'message' event
	socket.on('message', function (msg) {
		console.log(`User in socket ${socket.id} sent a message: ${msg}`);
	});

});
//listen to the port 3000
http.listen(3000, function () {
	console.log('Listening on port 3000');
});