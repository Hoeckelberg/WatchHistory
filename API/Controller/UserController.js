const userModel = require('../Models/UserModel');

const checkLogin = (req, res) => {
    userModel.loginUser(req.body[0].username, req.body[0].passwd).then(data => {
        console.log(req.body)
        res.send(data);
    })
}

const createUser = (req, res) => {
    for(const user of req.body) {
        console.log(req.body);
        userModel.createUser(user).then(data => {
            res.send(data);
        })
        
    }
}

const getAllUser = (req, res) => {
    userModel.getAllUser(req.body).then(data => {
        res.send(data);
    })
}

const getUserById = (req, res) => {
    userModel.getUserById(req.params.id).then(data => {
        res.send(data);
    })
}

module.exports = {
    checkLogin,
    createUser,
    getAllUser,
    getUserById
}