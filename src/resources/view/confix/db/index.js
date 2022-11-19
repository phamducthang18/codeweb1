
const mongoose = require('mongoose');

async function connect(){
    try {
    await mongoose.connect('mongodb://localhost:27017/mytodos',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("kết nối thành công")

        
    } catch (error) {
        console.log("flase")
    }
}
module.exports={
    connect
}