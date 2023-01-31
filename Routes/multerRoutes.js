const express = require('express')
const routes = express.Router()
const multerRoutes = require('../Controller/upload')
// const multerRoutes = require('../Controller/GdriveController')
// routes.post('/addFile',multerRoutes.uploadFile)
routes.post('/addFile',multerRoutes.uploadFile)
module.exports = routes