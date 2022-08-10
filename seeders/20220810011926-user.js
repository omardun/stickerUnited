'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users', 
      [
        {
      firstName: 'Teddy',
      lastName: 'Smith',
      email: 't.smith@mail.com',
      password: 'cuddles',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Libby',
      lastName: 'Gallagher',
      email: 'l.gallagher@mail.com',
      password: 'watermellon',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Susan',
      lastName: 'Grounds',
      email: 's.grounds@mail.com',
      password: 'password',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
