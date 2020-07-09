module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("users", {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'user_id'
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'first_name',
            validate: {
                max: 30,
                min: 2
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'last_name',
            validate: {
                max: 30,
                min: 2
            }
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true,
                max: 30
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 5
            }
        }
    });

    return User;
};