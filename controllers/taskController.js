const db = require("../models");
const Task = db.tasks;
const errorHandler = require('../utils/errorHandler')

module.exports.create = async function(req,res){
    try {
        const task = await Task.create({
            title: req.body.title,
            description: req.body.description,
            userId: req.user.userId,
            status:'View'
        })
        res.status(201).json(task)
    }catch (e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function(req,res){
    let updateValues = {
        title: req.body.title,
        description: req.body.description
    }

    try {
        await Task.update(updateValues, { where: { id: req.body.id } })
        res.status(200).json({
            message:"Update successful"
        })
    }catch (e) {
        errorHandler(res, e)
    }
}

module.exports.changeStatus = async function(req,res){
    try {
        await Task.update(
            {status: req.body.status},
            { where: { id: req.body.id }}
            )
        res.status(200).json({
            message:"Update successful"
        })
    }catch (e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function(req,res){
    try {
        await Task.destroy({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json({
            message:"Deleted successful"
        })
    }catch(e){
        errorHandler(res, e)
    }
}

module.exports.getAll = async function(req,res){
    try {
        const tasks = await Task.findAll({
            where:{
                status: req.params.status
            },
            order: ['userId','DESC']
        })
        res.status(200).json(tasks)
    }catch (e) {
        errorHandler(res, e)
    }
}

module.exports.changeUser = async function (req,res) {
    try {
        await Task.update(
            {userId: req.body.userId},
            { where: { id: req.body.id }}
        )
        res.status(200).json({
            message:"Update successful"
        })
    }catch (e) {
        errorHandler(res, e)
    }
}

