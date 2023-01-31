const userSchema = require('../Model/userSchema')
const examSchema = require('../Model/examSchema')
const sendmail = require('./sendMail')
const bcrypt=require('bcrypt')
const saltRound=10

const hash1=(passw)=>{
    return bcrypt.hashSync(passw,saltRound)    
}
module.exports.addUser = ((req,res)=>{
    req.body.password = hash1(req.body.password);
    const user = new userSchema(req.body)
    console.log(req.body)
   var email = req.body.email
    var OTP = otpGenerator()
    console.log(OTP)
    sendmail.sendMail(email,OTP)
    // send()
    // res.render('sendMail.js');
    
    // user.save((err,data) =>{
    //     if (err){
    //         res.status(500).json({
    //             message: "Error saving user"
    //         })
    //     }
    //     else{
    //         res.status(201).json({
    //             message: "User saved successfully",
    //             data : data
    //         })
    //     }
    // })
})
module.exports.addExam = ((req,res)=>{
    var id = req.params.Id
    userSchema.findOne({"name":id},(err,data)=>{
        if (err)
        {
            res.status(500).json({
                message: "Couldn't find the user with the name!"
            })
        }
        else
        {
            const occu = data.occupation
            console.log(occu)
            if (occu == 'Teacher'){
                console.log("In if")
                const exam = new examSchema(req.body)
                exam.save((err,data)=>{
                    if (err){
                        res.status(500).json(
                            {
                                message:"Could not create exam"
                            }
                        )
                    }
                    else{
                        res.status(200).json({
                            message: "Exam created",
                            data : data
                        })
                    }
                })
            }
            else
            {
                res.status(500).json(
                    {
                        message: "You're a student! Know your limits!"
                    }
                )
            }
        }
    })
})
exports.popu=((req,res)=>{
    userSchema.find().populate('exam').exec((err,data)=>{
        if(err){
            res.status(500).json({
                message: 'Error getting user',
                error:err.message
            })
        }
        else{
            res.status(200).json({
                message: 'user FOund',
                data: data
            })
        }
    })
})

module.exports.getUser = ((req,res)=>{
    userSchema.find((err,data)=>{
        if (err){
            res.status(500).json({
                message: "Error getting the user"
            })
        }
        else{
            res.status(200).json({
                message: "User Found",
                data:data
            })
        }
    })
})

exports.getOneUser= ((req,res)=>{
    var id = req.params.Id
    userSchema.find({"name":id},(err,data)=>{
        if (err)
        {
            res.status(500).json({
                message: "Couldn't find the user with the id!"
            })
        }
        else
        {
            res.status(200).json({
                message: "Found the user",
                data:data
            })
        }
    })
})
module.exports.updateUser=((req,res)=>{
    var id = req.params.Id
    userSchema.findByIdAndUpdate(id,req.body,(err,data)=>{
        if (err){
            res.status(500).json({
                message: "Could not locate the user"
            })
        }
        else
        {
            res.status(200).json({
                message: "User updated successfuly",
                data:data
            })
        }
    })
})
module.exports.deleteUser=((req,res)=>{
    var id = req.params.Id
    userSchema.findByIdAndDelete(id,req.body,(err,data)=>{
        if (err){
            res.status(500).json({
                message: "Could not locate the user"
            })
        }
        else
        {
            res.status(200).json({
                message: "User updated successfuly",
                data:data
            })
        }
    })
})
function otpGenerator (){
    var Str = "0123456789"
    let OTP = '';
    for (let i = 0; i < 4; i++ ) {
        OTP += Str[Math.floor(Math.random() * 10)];
    }
    return OTP
}