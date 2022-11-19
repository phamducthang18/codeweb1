const mongoose = require("mongoose");
const mongoosedelete = require('mongoose-delete');
const Schema = mongoose.Schema;


  const User = new Schema({
    name:String,
    email: String,
    password: String,
    diachi:String,
    city:String
  });
  User.plugin(mongoosedelete,{ 
    deletedAt :true,
    overrideMethods: 'all',
   });
module.exports  = mongoose.model('User', User);
