const mongoose = require("mongoose");
const mongoosedelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: String,
    mota: String ,
    anh:String,
    slug:String,
    
    
  });

  Course.plugin(mongoosedelete,{ 
    deletedAt :true,
    overrideMethods: 'all',
   });
module.exports  = mongoose.model('Course', Course);
