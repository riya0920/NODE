const validate = (schema) => async(req,res,next)=>{
    try{
        await schema.parseAsync({
            body: req.body,
            query: req.query,
            params: req.params
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