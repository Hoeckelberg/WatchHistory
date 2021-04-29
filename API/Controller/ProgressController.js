const ProgressModel = require('../Models/ProgressModel');

const getProgress = (req, res) => {
    ProgressModel.getProgressByUserId(req.params.id).then(data => {
        res.send(data);
    })
}
const createProgress = (req, res) => {
    for(const progress of req.body) {
        console.log(req.body);
        ProgressModel.createProgress(progress).then(data => {
            res.send(data);
        })
    }
}
module.exports = {
    getProgress,
    createProgress,

}