const validate = (schema) => async (req,res,next)=>{
    try{
        await schema.parseAsync({
            body: req.body,
            query: req.query,
            params: req.params
        })
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
        return next()
    }
    catch(err){
        return res.status(500).json({
            message: "Something went wrong!"
        })
    }
}
module.exports = {validate}