module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("tasks", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                max: 30,
                min: 2
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
            validate:{
                max: 30,
                min: 2
            }
        },
        status: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isIn: [['View', 'In Progress', 'Done']],
                msg: "Must be View or In Progress or Done."
            }
        }
    });

    return User;
};