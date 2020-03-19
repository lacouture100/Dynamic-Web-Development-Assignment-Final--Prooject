//Define what our database should expect from us
//Separating our database logic from our server 

const mongoose = require("mongoose");
//Schema is how we are going to define what properties are going to be in our database
const Schema = mongoose.Schema;

//Give it a JSON object
const todoSchema = new Schema({
    "category": String,
    "idea": String,
    "timelog": String
});

//We are going to make our database in a 'todos' collection
//the data our 'todos' collection should expect comes from our 'todoSchema'
//Make a new collection called 'ideadumps' and make it availbale for our API

//The first argument is the singular name of the collection your model is for. ** Mongoose automatically looks for the plural, lowercased version of your model name. **
const db = mongoose.model('IdeaDump', todoSchema);
module.exports = db;