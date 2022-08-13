'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserSticker extends Model {

    static associate(models) {
    }
  }
  UserSticker.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      stickerId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Stickers',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'UserSticker',
    }
  );
  return UserSticker;
};