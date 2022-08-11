"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "jdiaz483@gmail.com",
          password: "Logi3847",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "jbenton387@gmail.com",
          password: "Cash2560",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "orosquero568@gmail.com",
          password: "Rosco4591",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
