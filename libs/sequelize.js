const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const { setUpModels } = require('../db');


const options = {
  dialect: 'postgres',
  timezone: '-03:00'
};

const sequelize = new Sequelize(config.dbUrl, options);
setUpModels(sequelize);


module.exports = sequelize ;
