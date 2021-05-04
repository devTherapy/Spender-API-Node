'use strict'
module.exports = (sequelize, DataTypes) => {
    const roles = sequelize.define('Role', {
        Id: { 
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        roleName: {
            type: DataTypes.STRING,    
            allowNull: false,         
        },
   }, 
    )
    roles.associate = function (models){
    roles.hasMany(models.User);
      }
    return roles;
}