const express = require('express')
const passport = require('passport')
const controller = require('../controllers/userController')
const router = express.Router()

router.get('/profile', passport.authenticate('jwt', {session: false}), controller.getProfile)
router.get('/all',  controller.getAll)
router.post('/update', passport.authenticate('jwt', {session: false}), controller.update)
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.remove)

module.exports = router