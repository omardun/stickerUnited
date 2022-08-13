'use strict';

const bcrypt = require('bcrypt');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      User.belongsToMany(models.Stickers, {
        as: 'stocks',
        through: models.UserStickers,
        foreignKey: 'userId',
        otherKey: 'stickerId'
      });
     }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, 
  
  );
  return User;
};