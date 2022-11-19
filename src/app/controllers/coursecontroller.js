const { query } = require("express");
const Course =require('../module/Course')
const {mutipleMongoosetoObject,mongoosetoObject} = require('../../untill/mongo')

class CourseController {
    //get news
   
    show(req,res,next){
        Course.findOne({slug : req.params.slug})
        .then(course=>{
            res.render('courses/show')
        })
        .catch(next)
    }
    //get
    create(req,res,next){
        res.render('courses/create')
    }
    //post
    store(req,res,next){
        const course =new Course(req.body);
        course.save()
        .then(()=>res.redirect('/'))
        
    }
    edit(req,res){
        Course.findById(req.params.id)
        .then(course=>{
            res.render('courses/edit',{
                course : mongoosetoObject(course)
            })
        })
    }
    update(req,res,next){
        Course.updateOne({_id :req.params.id},req.body)
       .then(()=>res.redirect('me'))
    }
    me(req,res,next){
        Promise.all([Course.find({}),Course.countDocumentsDeleted()])
        .then(([course,deleteCount])=>{
            res.render('me',{
                deleteCount,
                course:mutipleMongoosetoObject(course)
               
            })
        })
        

        
        
    }
    what(req,res,next){
        Course.findById(req.params.id)
        .then(course=>res.render('courses/what',{
            course : mongoosetoObject(course)
        }))
    }
    delete(req,res,next){
        Course.delete({_id:req.params.id})
        .then(()=>res.redirect('me'))
    }
    trash(req,res,next){
        Course.findDeleted({})
        .then(course=>res.render('courses/trash',{
            course:mutipleMongoosetoObject(course)
        }))
        .catch(next);
    }
    restore(req,res,next){
        Course.restore({_id:req.params.id})
        .then(()=>res.redirect('trash'))
    }
    delete1(req,res,next){
        Course.deleteOne({_id:req.params.id})
        .then(()=>res.render('me'))
    }
}
module.exports = new CourseController;