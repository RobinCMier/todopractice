'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn("todolists", "userId", {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      });
    },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("todolists", "userId");
  }
};