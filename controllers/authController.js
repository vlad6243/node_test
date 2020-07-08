const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const db = require("../models");
const User = db.users;
const keys = require('../config/keys')
const errorHandler = require('../utils/errorHandler')

module.exports.login = async function(req, res) {
    const candidate = await User.findOne({
        where: {
            email: req.body.email
        }
    });

    if (candidate) {
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
        if (passwordResult) {
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate.userId
            }, keys.jwt, {expiresIn: 60 * 60})

            res.status(200).json({
                token: `Bearer ${token}`
            })
        } else {
            res.status(401).json({
                message: 'Wrong password.'
            })
        }
    } else {
        res.status(404).json({
            message: 'Email not found'
        })
    }
}

module.exports.register = async function(req, res) {
    const candidate = await User.findOne({  where: {
            email:req.body.email
        }
    })

    if (candidate) {
        res.status(409).json({
            message: 'Email exist.'
        })
    } else {
        const salt = bcrypt.genSaltSync(10)
        const password = req.body.password

        try {
            const user = await User.create({
                email: req.body.email,
                password: bcrypt.hashSync(password, salt)
            })
            res.status(201).json(user)
        } catch(e) {
            errorHandler(res, e)
        }

    }
}