const { Player, PlayerSchema } = require('./models/players.model');
const { User, UserSchema } = require('./models/users.model');
const { Product, ProductSchema } = require('./models/products.model');

function setUpModels(sequelize) {
  Player.init(PlayerSchema, Player.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
}

module.exports = { setUpModels };