const Course = require('../Model/Course');
const { mutipleMongoosetoObject } = require('../../util/mongoose')
class SiteController {

    // [Get] /
    index(req, res) {
        res.render('home')
    }

    // [Get] /search
    search(req, res) {
        res.render('')
    }

    // [GET] /course
    course(req, res, next) {
        // Course.find({}, function (err, Course) {
        //     if(!err)
        //         {
        //             res.json(Course)
        //         }
        //     else    
        //     {
        //         res.status(400).json({error : 'ERROR'})
        //     }

        //   })
        Course.find({})
            .then(courses => {
                res.render('cource/list', { courses: mutipleMongoosetoObject(courses) })
            })
            .catch(next)
    }
}

module.exports = new SiteController;
