'use strict';

const {PRODUCTS_TABLE, ProductSchema} = require('../models/products.model')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(PRODUCTS_TABLE, ProductSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(PRODUCTS_TABLE);
  }
};
