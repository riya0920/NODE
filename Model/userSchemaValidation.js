const zod = require('zod')
exports.userSchemaValidation = zod.object({
    body:zod.object({
        name: zod.string().min(3).max(100),
        age: zod.number().positive().int(),
        age: zod.number().positive().int(),
        exam: zod.string(),
        password: zod.string().min(3).max(100),

    })
})