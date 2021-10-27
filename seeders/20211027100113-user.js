'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users',[
      {
        name:"Baby",
        email:"b@b",
        phone: 7567,
        password:"Babyspice",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"Scary",
        email:"s@s",
        phone: 8659675,
        password:"Scaryspice",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"Ginger",
        email:"G@G",
        phone: 695765,
        password:"Gingerspice",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:"Sporty",
        email:"sp@sp",
        phone: 865965,
        password:"Sportyspice",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],{});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {})
  }
};
