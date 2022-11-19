const express = require('express');
const router = express.Router();

const loginController =require('../app/controllers/logincontroller') 

router.get('/',loginController.login);
router.post('/login',loginController.login1);
router.get('/accout/create',loginController.create);
router.post('/create/accout',loginController.createaccout);



module.exports= router; 