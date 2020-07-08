const express = require('express')
const passport = require('passport')
const controller = require('../controllers/taskController')
const router = express.Router()

router.post('/create', passport.authenticate('jwt', {session: false}), controller.create)
router.post('/update', passport.authenticate('jwt', {session: false}), controller.update)
router.post('/statusChange', passport.authenticate('jwt', {session: false}), controller.changeStatus)
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.remove)
router.get('/all', controller.getAll)
router.post('/userChange', passport.authenticate('jwt', {session: false}), controller.changeUser)

module.exports = router