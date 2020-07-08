const db = require("./models");
const User = db.users;
const Task = db.tasks;

module.exports.initial = function () {
    User.create({email:'first@g.com'})
}