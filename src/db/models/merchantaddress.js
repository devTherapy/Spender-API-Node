'use strict'
module.exports = (sequelize, DataTypes) => {
    const MerchantAddress = sequelize.define('Merchant_Address', {
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
    MerchantAddress.associate = function (models)
    {     
    MerchantAddress.belongsTo(models.Merchant);
    }
    return MerchantAddress;
}