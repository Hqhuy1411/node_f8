const express = require('express')
const router = express.Router()

const courseController = require('../app/controller/CourseController')

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:slug/edit', courseController.edit);
router.put('/:slug' , courseController.update);
router.delete('/:slug' , courseController.destroy); // xoa mem
router.patch('/:slug/restore' , courseController.restore); // khoio phuc
router.delete('/:slug/force' , courseController.forceDestroy);  // Xoa thuc
router.get('/:slug', courseController.show);
module.exports = router