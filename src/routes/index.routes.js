const newsRouter = require('./news.routes')
const siteRouter = require('./site.routes')
const courseRouter = require('./course.routes')

function route(app){

    app.use('/news', newsRouter)
    app.use('/', siteRouter)
    app.use('/course', courseRouter)
}

module.exports = route;
