const questionSchema = require('../Model/questionSchema')
 module.exports.addQue = ((req,res)=>{
    const question = new questionSchema (req.body)
    question.save((err,data)=>{
        if (err){
            res.status(500).json({
                message: "Question could not be created!"
            })
        }
        else{
            res.status(200).json({
                message: "Question created",
                data : data
            })
        }
    })
 })
 exports.getQue = ((req,res)=>{
    questionSchema.find((err,data)=>{
        if (err){
            res.status(500).json({
                message: "Error saving questions"
            })
        }
        else
        {
            res.status(500).json({
                data:data
            })
        }
    })
 })
exports.pullQuestion = ((req,res)=>{
    var id = req.params.id
    questionSchema.findOneAndUpdate({"_id":id},{$pull:{"question":req.body.questionId}},{new:true},(err,data)=>{
        if (err){
            res.status(500).json({message:"Error saving exams"})

        }
        else{
            res.status(201).json({message:"Question removed",data:data})
        }

    })
})