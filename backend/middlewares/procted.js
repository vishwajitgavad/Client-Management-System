const jwt = require("jsonwebtoken")

exports.procted = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).json({
                message:"please Provide token"
            })
        }
        const verify = jwt.verify(req.headers.authorization, "JWT_PASSOWRD")
        
        next()
    } catch (error) {
        if (error.name === "jsonWebTokenError") {
            return res.status(401).json({
                message:"Invalid Token"
            })
        }
        return res.status(400).json({
            message: "something went wrong" + error.message,
            error
        })
    }
}