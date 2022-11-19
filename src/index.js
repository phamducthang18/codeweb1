const express = require('express');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override')
const  {engine} = require('express-handlebars');
const app = express();
app.use(express.static(path.join(__dirname,'public')));
app.use(morgan('combined'))

app.engine('handlebars', engine({
  helpers : {
    sum :(a,b)=>a+b,
  }
}));
app.set('view engine', 'handlebars');
app.set('views',path.join(__dirname,'resources/view'))

app.use(express.urlencoded({
  extended : true
}))
app.use(methodOverride('_method'))
app.use(express.json())
const route = require('./routes')
const db = require('./resources/view/confix/db')
db.connect();


//route 
route(app);

app.listen(3000)