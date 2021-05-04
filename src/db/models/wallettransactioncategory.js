'use strict'
module.exports = (sequelize, DataTypes) => {
    const TransactionCategory = sequelize.define('Wallet_Transaction_Category', {
        Id: { 
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: sequelize.UUIDV4,
            allowNull: false,
        },
        CategoryName: {
            type: DataTypes.STRING,    
            allowNull: false,         
        },
   }, 
    )
    return TransactionCategory;
}