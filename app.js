const express = require('express')
const passport = require('passport')
const bodyParser = require('body-parser')
const authRouter = require('./routes/authRouter')
const userRouter = require('./routes/userRouter')
const taskRouter = require('./routes/taskRouter')
const app = express()

const db = require("./models");
const autocomplete = require('./autocomplete');
db.sequelize.sync({force: true}).then( () => {
    autocomplete.initial();
});

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())

app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/task', taskRouter)

module.exports = app
