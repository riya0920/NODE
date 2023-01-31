const mongoose = require('mongoose')
const schema = mongoose.Schema
const questionSchema = new schema ({
    Question : {
        type: String,
        marks: Number
    },
    Options : [{
        type : String
    }],
    Answer : {
        type: String
    }
})
module.exports = mongoose.model('Question',questionSchema)