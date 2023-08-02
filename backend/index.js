const express = require("express")
const { connectMONGO } = require("./config/db")
// const { connectMONGO } = require("./config/db")
const cors = require("cors")
require("dotenv").config({ path: "./config/.env" })
// const mongoose = require("mongoose")
const mongoose = require("mongoose")
const app = express()
connectMONGO()
app.use(cors())
app.use(express.json())
// app.use("/user", require("./routes/userRoutes"))
app.use("/user", require("./routes/userRoutes"))
mongoose.connection.once("open", () => {
    console.log("DB connceted")
    app.listen(process.env.PORT, err => {
        if (err) {
            console.log(`UNABLE TO START`, err);
        } else {
            console.log(`SERVER RUNNING http://localhost:${process.env.PORT}`);
        }
    })
})
mongoose.connection.on("error", () => {
    console.log(`UNABLE TO START CONNCET MONGO`);
})