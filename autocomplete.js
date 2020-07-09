const db = require("./models");
const User = db.users;
const Task = db.tasks;

module.exports.initial = function () {
    User.create({email:'testUser1@g.com', password:'12345'})
    User.create({email:'testUser2@g.com', password:'12345'})
    User.create({email:'testUser3@g.com', password:'12345'})
    User.create({email:'testUser4@g.com', password:'12345'})
    User.create({email:'testUser5@g.com', password:'12345'})
    User.create({email:'testUser6@g.com', password:'12345'})
    User.create({email:'testUser7@g.com', password:'12345'})
    User.create({email:'testUser8@g.com', password:'12345'})
    User.create({email:'testUser9@g.com', password:'12345'})
    User.create({email:'testUser10@g.com', password:'12345'})
    User.create({email:'testUser11@g.com', password:'12345'})
    User.create({email:'testUser12@g.com', password:'12345'})
    User.create({email:'testUser13@g.com', password:'12345'})
    User.create({email:'testUser14@g.com', password:'12345'})
    User.create({email:'testUser15@g.com', password:'12345'})
    User.create({email:'testUser16@g.com', password:'12345'})
    User.create({email:'testUser17@g.com', password:'12345'})
    User.create({email:'testUser18@g.com', password:'12345'})
    User.create({email:'testUser19@g.com', password:'12345'})
    User.create({email:'testUser20@g.com', password:'12345'})

    Task.create({ title:"testTask1", status: "View", userId:1})
    Task.create({ title:"testTask2", status: "View", userId:2})
    Task.create({ title:"testTask3", status: "View", userId:3})
    Task.create({ title:"testTask4", status: "Done", userId:4})
    Task.create({ title:"testTask5", status: "View", userId:5})
    Task.create({ title:"testTask6", status: "Done", userId:6})
    Task.create({ title:"testTask7", status: "View", userId:7})
    Task.create({ title:"testTask8", status: "View", userId:8})
    Task.create({ title:"testTask9", status: "In Progress", userId:9})
    Task.create({ title:"testTask10", status: "View", userId:10})
}