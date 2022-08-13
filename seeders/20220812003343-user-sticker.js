'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'UserStickers',
      [
        {
          userId: 1,
          stickerId: 1,
        },
        {
          userId: 1,
          stickerId: 3,
        },
        {
          userId: 1,
          stickerId: 4,
        },
        {
          userId: 1,
          stickerId: 9,
        },
        {
          userId: 2,
          stickerId: 2,
        },
        {
          userId: 2,
          stickerId: 3,
        },
        {
          userId: 2,
          stickerId: 10,
        },
        {
          userId: 2,
          stickerId: 11,
        },
        {
          userId: 3,
          stickerId: 4,
        },
        {
          userId: 3,
          stickerId: 5,
        },
        {
          userId: 3,
          stickerId: 7,
        },
        {
          userId: 3,
          stickerId: 8,
        },
        {
          userId: 3,
          stickerId: 9,
        },
        {
          userId: 3,
          stickerId: 11,
        },
        {
          userId: 3,
          stickerId: 12,
        },
        {
          userId: 3,
          stickerId: 6,
        },
        {
          userId: 3,
          stickerId: 1,
        },
        {
          userId: 3,
          stickerId: 2,
        },
      ],
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserStickers', null, {});
  },
};
