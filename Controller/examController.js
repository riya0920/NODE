const examSchema = require ("../Model/examSchema")

module.exports.addExam = ((req,res)=>{
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
})
exports.popu=((req,res)=>{
    examSchema.find().populate('questions').exec((err,data)=>{
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
exports.PuSH = ((req,res)=>{
    var id = req.params.id
    examSchema.findByIdAndUpdate({"_id":id},{$push:{"Question":req.body.questionId}},{new:true},(err,data)=>{
        if (err){
            res.status(500).json({
                message:err
                
            })
        }
        else{
            res.status(200).json({
                message:"Pulled",
                data:data
            })
        }
    })
})