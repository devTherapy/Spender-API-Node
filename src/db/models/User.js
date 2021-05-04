'use strict'
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        Id: { 
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        FirstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        LastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                isEmail: true,
            }
        },
        Password: {
            type: DataTypes.STRING,     
            allowNull: false,
            validate: 
            {
                is:
                {
                    args: [[ ["^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"],]],
                    msg: "Password must contain at least 8 characters, one uppercase, one lowercase, one numeric and one special character",
                }
            }
          

        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: false,
          
        },
        profilePictureUrl: {
            type: DataTypes.STRING,
        },
        gender: {
          type: DataTypes.STRING,
      },
    }, 
    {
        hooks: {
            afterValidate: async (user) => {
                user.Password = await bcrypt.hash(user.Password, 8);
            }
        }
    })
    User.associate = function (models){
        models.User.hasOne(models.User_Contact);
        models.User.hasOne(models.User_Address);
    }
    return User;
}