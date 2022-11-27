const { render } = require('node-sass');
const { mutipleMongoosetoObject } = require('../../util/mongoose')
const Course = require('../Model/Course');

class MeController {

    // [Get] /course/:slug
    storedCourses(req, res,next) {
        Course.find({})
            .then(courses => res.render('me/stored-courses',{
                courses : mutipleMongoosetoObject(courses)
            }))
            .catch(next)
       
    }

}
module.exports = new MeController;