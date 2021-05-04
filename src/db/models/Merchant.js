'use strict'
module.exports = (sequelize, DataTypes) => {
    const Merchant = sequelize.define('Merchant', {
        Id: { 
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        MerchantName: {
            type: DataTypes.STRING,    
            allowNull: false,
           
        },
        companyLogo: {
            type: DataTypes.STRING,
        },
   }, 
    )
      Merchant.associate = function (models)
      {     
    //   Merchant.hasMany(models.Card, {as: 'cardRef', foreignKey: 'cardId'});
      }
      return Merchant;
}