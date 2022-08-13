'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserStickers extends Model {  }
  UserStickers.init(
    {
      userID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      strickersID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Stickers',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'UserStickers',
    }
  );
  return UserStickers;
};