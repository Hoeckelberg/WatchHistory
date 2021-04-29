const ProgressController = require('./Controller/ProgressController')
const UserController = require('./Controller/UserController')

module.exports = app => {
    app.get("/api/progress/:id", (req, res) => {
        ProgressController.getProgress(req, res)
        console.log("router get progress by id")
    }),
    app.post("/api/progress", (req, res) => {
        ProgressController.createProgress(req, res)
        console.log("router post progress")
    }),
    app.get("/api/user/:id", (req, res) => {
        UserController.getUserById(req, res)
        console.log("router get user by id")
    }),
    app.get("/api/user", (req, res) => {
        UserController.getAllUser(req, res)
        console.log("router get all user")
    }),
    app.post("/api/user", (req, res) => {
        UserController.createUser(req, res)
        console.log("router create user")
    }),
    app.post("/api/user/login/", (req, res) => {
        UserController.checkLogin(req, res)
        console.log("router check user login")
    })
}