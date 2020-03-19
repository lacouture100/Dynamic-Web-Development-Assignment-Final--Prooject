const fs = require("fs");
const path = require("path");
const express = require("express");
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