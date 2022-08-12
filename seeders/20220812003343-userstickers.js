'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'UserStickers',
      [
        {
          userId: 1,
          stockId: 1,
        },
        {
          userId: 1,
          stockId: 3,
        },
        {
          userId: 1,
          stockId: 4,
        },
        {
          userId: 1,
          stockId: 9,
        },
        {
          userId: 2,
          stockId: 2,
        },
        {
          userId: 2,
          stockId: 3,
        },
        {
          userId: 2,
          stockId: 10,
        },
        {
          userId: 2,
          stockId: 11,
        },
        {
          userId: 3,
          stockId: 4,
        },
        {
          userId: 3,
          stockId: 5,
        },
        {
          userId: 3,
          stockId: 7,
        },
        {
          userId: 3,
          stockId: 8,
        },
        {
          userId: 3,
          stockId: 9,
        },
        {
          userId: 3,
          stockId: 11,
        },
        {
          userId: 3,
          stockId: 12,
        },
        {
          userId: 3,
          stockId: 6,
        },
        {
          userId: 3,
          stockId: 1,
        },
        {
          userId: 3,
          stockId: 2,
        },
      ],
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserStickers', null, {});
  },
};
