const express = require('express')
const app = express()
const mongoose = require('mongoose')
const r = require('../Learning/Routes/testDBRoutes')
const userRoutes = require ('../Learning/Routes/userRoutes')
const examRoutes = require ('../Learning/Routes/examRoutes')
const multerRoutes = require ('../Learning/Routes/multerRoutes')
const questionRoutes = require ('../Learning/Routes/questionRoutes')
app.use(express.json())
app.use('/user',userRoutes)
app.use('/exam',examRoutes)
app.use('/question',questionRoutes)
app.use('/file',multerRoutes)
app.use('/test',r)
mongoose.connect('mongodb://127.0.0.1:27017/riya',(err)=>{
    if (err){
        console.log(err)
    }
    else{
        console.log("DB Connected!!")
    }
})
app.listen(9070,(err) => {
    console.log('Server listening on port 9070')
})