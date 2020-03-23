//Install dependencies
const express = require('express');
const socketIO = require('socket.io');
const INDEX = 'views/index.html'; // Define the index.html file address
const PORT = process.env.PORT || 3000;
let messageInterval = 1000; // counted in milliseconds
let timestamp;
let connectedDevices = [];
let devices = 0;

let piMsg;
let webMsg;

///////////////////////////////////////////////////////////////////////////
//SOCKET IO

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

//Callback event for EACH client
io.on('connection', (socket) => {
  console.log(`Client connected in socket ${socket.id}.`)
  //Message from Raspberry Pi to server.
  socket.emit(`Hello there ${devices}`);
  devices++;

  io.on('piMsg', (message) => {
    console.log(`Received pi message from ${socket.id}.`)
    //assign index to the object in the connectedDevices array
    let currentDevices = connectedDevices.length;
    //create the pi message object
    connectedDevices[currentDevices] = {
      "device": `Raspberry Pi`,
      "id": `${socket.id}`,
      "message": `${message}`
    }
    //Callback event when the pi disconnects
    //socket.on('disconnect', () => console.log(`Pi disconnected from socket ${socket.id}.`));
    socket.on('disconnect', () => connectedDevices.filter(function (element) {
      return element.id != socket.id;
    }));
  });

  //Message from Raspberry Pi to server.
  io.on('webMsg', (message) => {
    console.log(`Received webclient message from ${socket.id}.`)
    //assign index to the object in the connectedDevices array
    let currentDevices = connectedDevices.length;
    //create the web client message object
    connectedDevices[currentDevices] = {
      "device": `Web Client`,
      "id": `${socket.id}`,
      "message": `${message}`
    }

    //Callback event when the webclient disconnects
    socket.on('disconnect', () => connectedDevices.filter(function (element) {
      return element.id != socket.id;
    }));
    //add the server timestamp to the message
    
    
  });

});
timestamp = new Date().toTimeString();
console.log(connectedDevices);
/*This will send an event called 'time' to each client. 
The event will have the actual time attached.*/
setInterval(() => io.emit('time', timestamp, 5000));

/////////////////////////////////////////////////////////////////////
//MONGODB

/*
const fs = require("fs");
const path = require("path");
const config = require("./config");  //Not a library but a file in the directory
const mongoose = require("mongoose"); //Include package for handling 
const moment = require("moment"); //include the moment package

const PORT = config.PORT; //Default number defined in our module.exports
const MONGODB_URI = config.MONGODB_URI; // Defined in our module.exports

const app = express(); // Assign express() to a variable
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Response in this format: 2020-03-05T09:23:03-05:00
let logTime = moment().format().toString();

//Connect to our online database in MongoDB
mongoose.connect(MONGODB_URI, 
    {useNewUrlParser:true, 
    useUnifiedTopology:true
}).then(
    console.log("MongoDB connection worked!")
)

//This models.todos is a reference to our database
const db = require('./models/database');

//Middleware defines the order of files to run. If I would put an index.html file in the public folder it would grab that first
app.use(express.static(__dirname + '/public'));

//Whenever we get a request it will send the user towards index.html
app.get("/", (req,res) =>{
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

//GET If users visit our website/api/v1/todos we will get this message
app.get("/api/v1/ideas", async(req,res) => {
    try{
        //todos is our database, and within mongoDB we have a series of functions.
        //find() is an asynchronous function from DB
        const data = await db.find();
        res.json(data);
    } catch(error){
        res.json(error)
    }
});

//POST
//If users visit our website/api/v1/todos we will get this message
app.post("/api/v1/ideas", async(req,res) => {
    try{    
        const newData = {
            "category": req.body.category,
            "idea": req.body.idea,
            "timelog": logTime
        }
        const data = await db.create(newData);
        res.json(data);
    } 
    catch(error){
        res.json(error);
    }
});

//PUT the data with the entry id-
// :id is a URL parameter
app.put("/api/v1/ideas/:id", async(req,res) => {
    try{
        const id= req.params.id;
        const updatedData = {
            "category" : req.body.category,
            "idea" : req.body.idea,
            "timelog": logTime
        }
        const changedData = await db.findOneAndUpdate({_id:id} , updatedData, {new:true});
        res.json(changedData);
    } catch(error){
        res.json(error);
    }
});

//DELETE the entry id 
app.delete("/api/v1/ideas/:id", async(req,res) => {
    try{
        const id= req.params.id;
        const deletedData = await db.findOneAndDelete(id);
        res.json({message:"delete!", deletedDocument: deletedData});
    } catch(error){
        res.json(error)
    }
});

//Open the port
app.listen(PORT, ()=>{
    console.log(`See the magic at http://localhost:${PORT}`);
});
*/