'use strict';

const {PLAYER_TABLE, PlayerSchema} = require('../models/players.model')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(PLAYER_TABLE, PlayerSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(PLAYER_TABLE);
  }
};
