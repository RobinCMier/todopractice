'use strict';
//add a column in todoitem
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "todoitems",
      "important",
      {type: Sequelize.BOOLEAN},
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("todoitems", "important", {});
  }
};
