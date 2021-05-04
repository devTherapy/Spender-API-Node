'use strict'
module.exports = (sequelize, DataTypes) => {
    const UserAddress = sequelize.define('User_Address', {
        Id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        streetNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        city: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              notEmpty: true,
          }
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          notEmpty: true,
      }
  },
  postalCode: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
        notEmpty: true,
    }
},
    }, 
    )
    UserAddress.associate = function (models)
    {     
    // UserAddress.belongsTo(models.User, {as: 'userRef', foreignKey: 'userId'});
    }
    return UserAddress;
}