const db = require("../models");
const User = db.users;
const errorHandler = require('../utils/errorHandler')

module.exports.getProfile = async function (req,res) {
    try {
        const user = await User.findOne({
            where:{
                userId: req.user.userId
            }
        })
        res.status(200).json(user)
    }catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getAll = async function (req,res) {
    try {
        const users = await User.findAll({
            limit:10,
            offset:req.query.offset
        })
        res.status(200).json(users)
    }catch (e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function (req,res) {
    let updateValues = {
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }

    try {
        await User.update(updateValues, { where: { userId: req.user.userId } })
        res.status(200).json({
            message:"Update successful"
        })
    }catch (e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function (req,res) {
    try {
        await User.destroy({
            where:{
                userId: req.params.id
            }
        })
        res.status(200).json({
            message:"Deleted successful"
        })
    }catch(e){
        errorHandler(res, e)
    }
}