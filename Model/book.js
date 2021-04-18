const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name:String,
    qty:Number,
    authors:String,
    address:String
},{timestamps:true});

module.exports = mongoose.model("Books",schema);