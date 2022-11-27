const newsRouter = require('./news.routes')
const siteRouter = require('./site.routes')
const courseRouter = require('./course.routes')
const meRouter = require('./me.routes')
function route(app){

    app.use('/news', newsRouter)
    app.use('/', siteRouter)
    app.use('/me', meRouter)
    app.use('/course', courseRouter)
}

module.exports = route;
