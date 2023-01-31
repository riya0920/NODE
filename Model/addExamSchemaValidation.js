const zod = require('zod')
const check = "Teacher"
exports.addExamSchemaValidation = zod.object({
    body:zod.object({
        name:zod.string().min(3).max(30),
        age:this.age>18,
        occupation:check,
        exam:zod.string(),
        password:zod.string()
    })
})