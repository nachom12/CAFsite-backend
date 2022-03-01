const { Player, PlayerSchema } = require('./models/players.model');
const { User, UserSchema } = require('./models/users.model');

function setUpModels(sequelize) {
  Player.init(PlayerSchema, Player.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
}

module.exports = { setUpModels };