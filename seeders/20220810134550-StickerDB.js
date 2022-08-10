'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'StickerDBs',
      [
        {
          name: 'Bucs Sticker',
          price: 2.00,
          shape: 'square',
          image: 'cookie.jpeg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Cubs Sticker',
          price: 2.50,
          shape: 'round',
          image: 'cookie.jpeg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Tupac Sticker',
          price: 2.00,
          shape: 'square',
          image: 'cookie.jpeg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Bad Bunny Sticker',
          price: 3.00,
          shape: 'rectangle',
          image: 'cookie.jpeg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Kobe Sticker',
          price: 2.50,
          shape: 'round',
          image: 'cookie.jpeg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Jordan Sticker',
          price: 3.00,
          shape: 'rectangle',
          image: 'cookie.jpeg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: '?(._.)? Sticker',
          price: 2.00,
          shape: 'square',
          image: 'cookie.jpeg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Mike Wazoski Sticker',
          price: 2.00,
          shape: 'square',
          image: 'cookie.jpeg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Ben Tennyson Sticker',
          price: 2.50,
          shape: 'round',
          image: 'cookie.jpeg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Ed, Edd n Eddy Sticker',
          price: 3.00,
          shape: 'rectangle',
          image: 'cookie.jpeg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Cat Sticker',
          price: 2.00,
          shape: 'square',
          image: 'cookie.jpeg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Rocket League car Sticker',
          price: 2.50,
          shape: 'round',
          image: 'cookie.jpeg',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('stickers', null, {});
  }
};