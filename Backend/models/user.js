const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : String,
    age : Number,
    department : String,
    married : Boolean,
    salary : Number,
    address : String 
    

    // name : String,
    // phone : Number,
    // date : Date,
    // transaction : String,
    // action : String 
})

// we are creating a new collection
const UserDetails = new mongoose.model("UserDetails",userSchema)

module.exports = UserDetails;