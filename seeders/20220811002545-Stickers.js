'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Stickers',
      [
        {
          name: 'Bucs Sticker',
          price: 2.00,
          category: 'sports',
          imageURL: 'https://imgur.com/4cFMOia',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Cubs Sticker',
          price: 2.50,
          category: 'sports',
          imageURL: 'https://imgur.com/fe8Gf6a',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Tupac Sticker',
          price: 2.00,
          category: 'Artists',
          imageURL: 'https://imgur.com/peHbUIS',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Bad Bunny Sticker',
          price: 3.00,
          category: 'Artists',
          imageURL: 'https://imgur.com/qVkj3iH',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Kobe Sticker',
          price: 2.50,
          category: 'Athletes',
          imageURL: 'https://imgur.com/F1iPz5s',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Jordan Sticker',
          price: 3.00,
          category: 'Athletes',
          imageURL: 'https://imgur.com/qUWouB3',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: '?(._.)? Sticker',
          price: 2.00,
          category: 'Memes',
          imageURL: 'https://imgur.com/TALSkWQ',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Mike Wazoski Sticker',
          price: 2.00,
          category: 'Memes',
          imageURL: 'https://imgur.com/SPD1Uw8',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Ben Tennyson Sticker',
          price: 2.50,
          category: 'Cartoon',
          imageURL: 'https://imgur.com/Nlu8vsL',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Ed, Edd n Eddy Sticker',
          price: 3.00,
          category: 'Cartoon',
          imageURL: 'https://imgur.com/CPHzwDK',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Cat Sticker',
          price: 2.00,
          category: 'Random',
          imageURL: 'https://imgur.com/IVZherg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Rocket League car Sticker',
          price: 2.50,
          category: 'Random',
          imageURL: 'https://imgur.com/Ybrm7sA',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('stickers', null, {});
  }
};