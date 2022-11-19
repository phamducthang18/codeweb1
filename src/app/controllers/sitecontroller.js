const Course =require('../module/Course')
const User = require('../module/Login')
const {mutipleMongoosetoObject,mongoosetoObject} = require('../../untill/mongo');
const { count } = require('../module/Course');
class SiteController {
    
    post(req,res){
        const co = new Course({
            name : "thang",
            description :"thang đẹp zai"    
        })
        co.save().then((data)=> console.log(data));
    }
    index(req,res,next){
        Course.find({})
            .then(course => {
                
                res.render('home',{course : mutipleMongoosetoObject(course)})
            })
            .catch(next);
       }
    search(req,res){
        res.render('search');
    }
   

    
}
module.exports = new SiteController;        