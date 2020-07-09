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

const getPaginationData = (data, page, limit) => {
    const { count: totalItems, rows: users } = data;
    const currentPage = page ? page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, users, totalPages, currentPage };
}

module.exports.getAll = async function (req,res) {
    const limit = req.query.size ? req.query.size : 10;
    const offset = req.query.page ? req.query.page * limit : 0;

    const users = await User.findAndCountAll({ limit: limit, offset: offset, })
        .then( data => {
            const response = getPaginationData(data,req.query.page,limit)
            res.status(200).json(response)
        })
        .catch ( e => {
            errorHandler(res, e)
        })
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