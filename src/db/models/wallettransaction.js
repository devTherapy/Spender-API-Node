'use strict'
module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Wallet_Transaction', {
        Id: { 
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        TransactionAmount: {
          type: DataTypes.FLOAT,    
          allowNull: false,      
      },
        Balance: {
            type: DataTypes.FLOAT,    
            allowNull: false,
           
        },
   }, 
    )
    Transaction.associate = function (models){
    Transaction.belongsTo(models.Wallet_Transaction_Category);
    Transaction.belongsTo(models.Wallet);
    }
    return Transaction;
}