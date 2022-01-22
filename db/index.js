const { Player, PlayerSchema } = require('./players.model');

function setUpModels(sequelize) {
  Player.init(PlayerSchema, Player.config(sequelize));
}

module.exports = { setUpModels };