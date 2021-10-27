'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('todoitems',[
      {
        task: "Pet the cat",
        deadline:"Now",
        todolistId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "Dishes",
        deadline:"Tonight",
        todolistId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "Groceries",
        deadline:"In three hours",
        todolistId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "Pet the cat again",
        deadline:"In four hours",
        todolistId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "Cook",
        deadline:"Tonight",
        todolistId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: "Sing the cat to sleep",
        deadline:"Bedtime",
        todolistId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ],{})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('todoitems', null, {})
  }
};
