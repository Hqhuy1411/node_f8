const express = require('express')
const route = express.Router()

const siteController = require('../app/controller/SiteController')

route.get('/seach',siteController.search)
route.get('/',siteController.index)

module.exports = route
