const express = require('express')
const routes = express.Router()
const testDBController = require('../Controller/testDBController')
routes.get('/t',testDBController.testAPi)
module.exports = routes