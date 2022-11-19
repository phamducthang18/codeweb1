const Course =require('../module/Course')
const User = require('../module/Login')
const {mutipleMongoosetoObject,mongoosetoObject} = require('../../untill/mongo');
const { count } = require('../module/Course');
class LoginController {
    login(req,res,next){
        res.render('login')       
    }
    login1(req,res,next){
         const username = req.body.email
         const password = req.body.password
         User.findOne({
            email : username,
            password: password
         })
         .then(data=>{
            data :mongoosetoObject(data)
            if(data){
                res.redirect('home')
            
            }
            else{
                res.redirect('back')
            }
         })
         .catch(next);
    }
    create(req,res,next){
        res.render('accout/create')
    }
    createaccout(req,res,next){
        const user =new User(req.body);
        user.save()
        .then(()=>res.redirect('/'))
    }
}
module.exports = new LoginController;        