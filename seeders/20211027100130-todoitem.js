'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('todoitems',[
      {
        task: "Pet the cat",
        deadline:"Now",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "Dishes",
        deadline:"Tonight",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "Groceries",
        deadline:"In three hours",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "Pet the cat again",
        deadline:"In four hours",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "Cook",
        deadline:"Tonight",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "Sing the cat to sleep",
        deadline:"Bedtime",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ],{})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('todoitems', null, {})
  }
};
