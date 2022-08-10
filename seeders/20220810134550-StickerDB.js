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
          image: 'https://imgur.com/4cFMOia',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Cubs Sticker',
          price: 2.50,
          shape: 'round',
          image: 'https://imgur.com/fe8Gf6a',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Tupac Sticker',
          price: 2.00,
          shape: 'square',
          image: 'https://imgur.com/peHbUIS',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Bad Bunny Sticker',
          price: 3.00,
          shape: 'rectangle',
          image: 'https://imgur.com/qVkj3iH',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Kobe Sticker',
          price: 2.50,
          shape: 'round',
          image: 'https://imgur.com/F1iPz5s',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Jordan Sticker',
          price: 3.00,
          shape: 'rectangle',
          image: 'https://imgur.com/qUWouB3',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: '?(._.)? Sticker',
          price: 2.00,
          shape: 'square',
          image: 'https://imgur.com/TALSkWQ',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Mike Wazoski Sticker',
          price: 2.00,
          shape: 'square',
          image: 'https://imgur.com/SPD1Uw8',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Ben Tennyson Sticker',
          price: 2.50,
          shape: 'round',
          image: 'https://imgur.com/Nlu8vsL',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Ed, Edd n Eddy Sticker',
          price: 3.00,
          shape: 'rectangle',
          image: 'https://imgur.com/CPHzwDK',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Cat Sticker',
          price: 2.00,
          shape: 'square',
          image: 'https://imgur.com/IVZherg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Rocket League car Sticker',
          price: 2.50,
          shape: 'round',
          image: 'https://imgur.com/Ybrm7sA',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('stickers', null, {});
  }
};