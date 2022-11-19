const { query } = require("express");

class NewsController {
    //get news
    index(req,res){
        res.render('news');
    };
    show(req,res){
        res.send("day la 10")
    }
}
module.exports = new NewsController;