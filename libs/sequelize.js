const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const { setUpModels } = require('../db');


const options = {
  dialect: 'postgres',
  timezone: '-03:00',
};

if (config.isProduction) {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: false
    }
  }
}

const sequelize = new Sequelize(config.dbUrl, options);
setUpModels(sequelize);


module.exports = sequelize;
