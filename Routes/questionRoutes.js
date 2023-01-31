const express = require('express')
const routes = express.Router()
const questionController = require('../Controller/questionController')
routes.post('/addQuestion',questionController.addQue)
routes.get('/getQue',questionController.getQue)
routes.delete('/pullQuestion',questionController.pullQuestion)
module.exports = routes