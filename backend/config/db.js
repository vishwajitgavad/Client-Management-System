const mongoose = require("mongoose")
exports.connectMONGO = () => {
    mongoose.connect(process.env.MONGO_URL)
}