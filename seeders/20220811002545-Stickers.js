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
          imageURL: 'https://i.imgur.com/4cFMOia.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Cubs Sticker',
          price: 2.50,
          category: 'sports',
          imageURL: 'https://i.imgur.com/fe8Gf6a.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Tupac Sticker',
          price: 2.00,
          category: 'Artists',
          imageURL: 'https://i.imgur.com/peHbUIS.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Bad Bunny Sticker',
          price: 3.00,
          category: 'Artists',
          imageURL: 'https://i.imgur.com/qVkj3iH.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Kobe Sticker',
          price: 2.50,
          category: 'Athletes',
          imageURL: 'https://i.imgur.com/F1iPz5s.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Jordan Sticker',
          price: 3.00,
          category: 'Athletes',
          imageURL: 'https://i.imgur.com/qUWouB3.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: '?(._.)? Sticker',
          price: 2.00,
          category: 'Memes',
          imageURL: 'https://i.imgur.com/TALSkWQ.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Mike Wazoski Sticker',
          price: 2.00,
          category: 'Memes',
          imageURL: 'https://i.imgur.com/SPD1Uw8.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Ben 10 Sticker',
          price: 2.50,
          category: 'Cartoon',
          imageURL: 'https://i.imgur.com/Nlu8vsL.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Ed, Edd n Eddy Sticker',
          price: 3.00,
          category: 'Cartoon',
          imageURL: 'https://i.imgur.com/CPHzwDK.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Cat Sticker',
          price: 2.00,
          category: 'Random',
          imageURL: 'https://i.imgur.com/IVZherg.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Rocket League car Sticker',
          price: 2.50,
          category: 'Random',
          imageURL: 'https://i.imgur.com/Ybrm7sA.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('stickers', null, {});
  }
};