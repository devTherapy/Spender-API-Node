'use strict'
module.exports = (sequelize, DataTypes) => {
    const MerchantContact = sequelize.define('Merchant_Contact', {
        Id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        countryCode: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        areaCode: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        
       
    }, 
    )
    MerchantContact.associate = function (models)
    {     
    MerchantContact.belongsTo(models.Merchant);
    }
    return MerchantContact;
}