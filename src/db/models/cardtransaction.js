'use strict'
module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Card_Transaction', {
        Id: { 
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        // wallet transaction history;
        //card transaction history
        //merchant profile url
   }, 
    )
    Transaction.associate = function (models){
    }
    return Transaction;
}