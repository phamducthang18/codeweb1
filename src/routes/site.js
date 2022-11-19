const express = require('express');
const router = express.Router();

const siteController =require('../app/controllers/sitecontroller') 

router.post('/post',siteController.post)
router.get('/search',siteController.search);
router.get('/',siteController.index);



module.exports= router; 