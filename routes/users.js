const mongoose = require('mongoose');
const plm = require('passport-local-mongoose')

mongoose.connect("mongodb+srv://Hemant:989635778o@cluster0.wpyaqsa.mongodb.net/pin");

const userSchema = mongoose.Schema({
  username  : String ,
  name : String,
  email : String,
  password : String,
  contact : Number,
  profileImage : String,
  boards : {
    type : Array,
    default : []
  },
  posts : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : "post"
  }]
});

userSchema.plugin(plm);
module.exports = mongoose.model("user" , userSchema);
