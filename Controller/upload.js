const multer = require('multer')
const GdriveController = require("../Controller/GdriveController")
const storage = multer.diskStorage({
    // destination:"./uploads",
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload1 = multer({
    storage:storage,
    limits:{filesize:100000}
}).single('file')

exports.uploadFile = ((req,res)=>{
    upload1(req,res,(err)=>{
        if (err)
        {
            res.status(500).json({
                message: "Some went wrong!"
            })
        }
        else
        {
            if (req.file == undefined){
                res.status(500).json({
                    message: "Some went wrong here!"
                })  
            }
            else{
                GdriveController.uploadFile(req.file.path)
                res.status(200).json({
                    message: "File is uploaded!!"
                })
            }
        }
    })
})