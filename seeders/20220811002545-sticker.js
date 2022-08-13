'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Stickers',
      [
        {
          name: 'Bucs Sticker',
          category: 'sports',
          imageURL: 'https://i.imgur.com/4cFMOia.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Cubs Sticker',
          category: 'sports',
          imageURL: 'https://i.imgur.com/fe8Gf6a.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Tupac Sticker',
          category: 'Artists',
          imageURL: 'https://i.imgur.com/peHbUIS.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Bad Bunny Sticker',
          category: 'Artists',
          imageURL: 'https://i.imgur.com/qVkj3iH.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Kobe Sticker',
          category: 'Athletes',
          imageURL: 'https://i.imgur.com/F1iPz5s.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Jordan Sticker',
          category: 'Athletes',
          imageURL: 'https://i.imgur.com/qUWouB3.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: '?(._.)? Sticker',
          category: 'Memes',
          imageURL: 'https://i.imgur.com/TALSkWQ.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Mike Wazoski Sticker',
          category: 'Memes',
          imageURL: 'https://i.imgur.com/SPD1Uw8.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Ben 10 Sticker',
          category: 'Cartoon',
          imageURL: 'https://i.imgur.com/Nlu8vsL.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Ed, Edd n Eddy Sticker',
          category: 'Cartoon',
          imageURL: 'https://i.imgur.com/CPHzwDK.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Cat Sticker',
          category: 'Random',
          imageURL: 'https://i.imgur.com/IVZherg.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          name: 'Race Car Sticker',
          category: 'Random',
          imageURL: 'https://i.imgur.com/Ybrm7sA.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Stickers', null, {});
  }
};