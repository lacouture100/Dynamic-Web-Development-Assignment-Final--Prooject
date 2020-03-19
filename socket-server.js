// Require HTTP module (to start server) and Socket.IO
const express = require('express')
const socket = require('socket.io');
const portNumber = 4000;

let app = express();
// Start the server at port 4000
let server = app.listen(portNumber, function(){
	console.log(`listening in por ${portNumber}`);
});

//Serve the static files
app.use(express.static('public'));

//Socket setup
var io = socket(server);

io.on('connection', function(socket){
	console.log(`Connection made in ${socket}`);
});
