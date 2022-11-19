const newsRouter = require('./news')
const courseRouter = require('./course')
const siteRouter =require('./site')
const loginRouter =require('./login')
function route(app) {
    
    app.use('/',loginRouter)
    app.use('/courses',courseRouter)
    app.use('/news',newsRouter)
    app.use('/home',siteRouter)
    
    
      
}

module.exports =route;