const { MongoosetoObject } = require('../../util/mongoose')
const Course = require('../Model/Course');

class CourseController {

    // [Get] /course/:slug
    show(req, res,next) {
        Course.findOne({slug : req.params.slug})
                .then(course =>{
                    res.render('cource/detail', { course: MongoosetoObject(course) })
                })
                .catch(next)
    }

    // [Get] /course/create
    create(req, res) {
        res.render('cource/create')
    }

    // [Post] /course/store
    store(req,res){
        const formData = {
            ...req.body,
            image: `https://files.fullstack.edu.vn/f8-prod/courses/6.png`
          }
        const course = new Course(formData);
        course.save();
        res.redirect('/course');
        
    }
}
module.exports = new CourseController;