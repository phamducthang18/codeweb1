const express = require('express');
const router = express.Router();

const courseController =require('../app/controllers/coursecontroller') 

router.get('/trash',courseController.trash);
router.get('/me',courseController.me);
router.get('/create',courseController.create);
router.post('/store',courseController.store);
router.get('/:slug',courseController.show);
router.get('/:id/edit',courseController.edit);
router.get('/:id/delete',courseController.what);
router.delete('/delete/:id',courseController.delete1);
router.delete('/:id',courseController.delete);
router.put('/:id',courseController.update);
router.patch('/:id',courseController.restore);




module.exports= router; 