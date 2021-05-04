'use strict'


module.exports = (sequelize, DataTypes) => {
    const Wallet = sequelize.define('Wallet', {
        Id: { 
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        Balance: {
            type: DataTypes.FLOAT,    
            allowNull: false,
           
        },
        // active
   }, 
    )
    Wallet.associate = function (models){
    Wallet.belongsTo(models.User);
    }
    return Wallet;
}