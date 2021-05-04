'use strict'


module.exports = (sequelize, DataTypes) => {
    const UserContact = sequelize.define('User_Contact', {
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
        AreaCode: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        
       
    }, 
    )
    UserContact.associate = function (models)
    {     
    // UserContact.belongsTo(models.User, {as: 'userRef', foreignKey: 'userId'});
    }
    return UserContact;
}