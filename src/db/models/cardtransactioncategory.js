'use strict'
module.exports = (sequelize, DataTypes) => {
    const TransactionCategory = sequelize.define('Card_Transaction_Category', {
        Id: { 
            type: DataTypes.UUID,
            defaultValue: sequelize.UUIDV4,
            primaryKey: true,

            allowNull: false,
        },
        CategoryName: {
            type: DataTypes.STRING,    
            allowNull: false,         
        },
   }, 
    )
    TransactionCategory.associate = function (models){
      TransactionCategory.hasMany(models.Card_Transaction)
    }
    return TransactionCategory;
}