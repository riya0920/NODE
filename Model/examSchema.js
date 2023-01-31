const mongoose = require('mongoose')
const schema = mongoose.Schema
const examSchema = new schema({
    name : {
        type : String,
        required : true
    },
    total_marks : {
        type : Number,
        required : true
    },
    questions : [{
        type:schema.Types.ObjectId,
        ref:'Question'
    }]
})
module.exports = mongoose.model('Exam',examSchema)