const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/User")
exports.registerUser = async (req, res) => {
    try {
        const { password, email } = req.body
        const found = await User.findOne({ email: email })
        if (found) {
            return res.status(400).json({
                massage: "email is already register"
            })
        }
        const hashPassword = bcrypt.hashSync(password, 10)
        const result = await User.create({ ...req.body, password: hashPassword })
        // localStorage.setItem("register", JSON.stringify({ register: true }))
        res.json({
            message: "User Register SuccessFully",
            result,
        })
    } catch (error) {
        res.status(400).json({
            message: "UNABLE TO REGISTER" + error.message
        })
    }
}
exports.getAllregisterUsers = async (req, res) => {
    try {
        const result = await User.find()

        res.json({
            message: "User fetched SuccessFully",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "UNABLE TO FETCH" + error.message
        })
    }
}
exports.destroyUsers = async (req, res) => {
    try {
        const result = await User.deleteMany()
        res.json({
            message: "User Data Destroy",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "SOMETHING WENT WORNG" + error.message
        })
    }
}
exports.loginUsers = async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) {
            return res.status(400).json({
                message: `All filds are requred`
            })
        }
        const result = await User.findOne({ email: req.body.email })
        if (!result) {
            return res.status(400).json({
                message: `${req.body.email} is not registered with us`
            })
        }
        const compare = bcrypt.compare(req.body.password, result.password)
        if (!compare) {
            return res.status(400).json({
                message: `Invalid Password`
            })
        }
        const token = jwt.sign({
            name: result.name,
            id: result._id
        }, "JWT_PASSOWRD")
        res.json({
            message: "User Login Success",
            result,
            token
        })
    } catch (error) {
        res.status(400).json({
            message: "SOMETHING WENT WORNG" + error.message
        })
    }
}