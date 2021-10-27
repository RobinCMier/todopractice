'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('todolists',[
      {
        name:"Baby list",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name:"Scary list",
        userId:2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"Ginger list",
        userId:3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"Sporty list",
        userId:4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ],{})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('todolists', null, {})
  }
};
