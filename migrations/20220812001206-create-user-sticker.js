'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'UserStickers',
      {
        userId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Users',
            key: 'id',
          },
        },
        stickerId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Stickers',
            key: 'id',
          },
        },
      },
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserStickers');
  }
};