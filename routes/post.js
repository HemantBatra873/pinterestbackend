const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Hemant:989635778o@cluster0.wpyaqsa.mongodb.net/pin");

const postSchema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    image : String , 
    title : String , 
    description : String
});

module.exports = mongoose.model("post" , postSchema); 