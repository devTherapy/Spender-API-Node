'use strict'

module.exports = (sequelize, DataTypes) => {
    const Card = sequelize.define('Card', {
        Id: { 
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        value: {
            type: DataTypes.FLOAT,    
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
       
   }, 
    )
    Card.associate = function (models){
    Card.belongsTo(models.Merchant);
    Card.belongsTo(models.User);
    Card.hasMany(models.Card_Transaction);
    }
    return Card;
}