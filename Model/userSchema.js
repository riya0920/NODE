const mongoose = require('mongoose')
const schema = mongoose.Schema
const userschema = new schema ({
    name:{
    type: String,
    required :true
    },
    age:{
        type:Number,
        required: true
    },
    occupation:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    exam :[
        {
            type:schema.Types.ObjectId,
            ref:'Exam'
        }
    ],
    password:{
        type:String,
        required: true
    }
    
})
module.exports = mongoose.model('User',userschema)
