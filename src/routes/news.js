const express = require('express');
const router = express.Router();

const newsController =require('../app/controllers/newcontrller') 


router.get('/cc',newsController.show);
router.get('/',newsController.index);


module.exports= router; 