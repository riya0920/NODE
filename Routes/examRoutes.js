const express = require('express')
const routes = express.Router()
const examController = require("../Controller/examController")
routes.get('/getExamP',examController.popu)
routes.post('/addExam',examController.addExam)
routes.post('/pushQue/:id',examController.PuSH)
module.exports = routes
