const { getAllregisterUsers, registerUser, loginUsers, destroyUsers } = require("../controller/userController")
const { procted } = require("../middlewares/procted")

const router = require("express").Router()

router
    .get("/", getAllregisterUsers)
    .post("/register", registerUser)
    .post("/login", loginUsers)
    .delete("/destroy/:id", destroyUsers)

module.exports = router