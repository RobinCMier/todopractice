'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('todolists',[
      {
        name:"Baby",
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name:"Scary",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"Ginger",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"Sporty",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ],{})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('todolists', null, {})
  }
};
