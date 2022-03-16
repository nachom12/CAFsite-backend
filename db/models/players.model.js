const { Model, DataTypes, Sequelize } = require('sequelize');

const PLAYER_TABLE = 'player'

const PlayerSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  firstName: {
    allowNull: false,
    field: 'first_name',
    type: DataTypes.STRING
  },
  lastName: {
    allowNull: false,
    field: 'last_name',
    type: DataTypes.STRING
  },
  age: {
    type: DataTypes.INTEGER
  },
  placeOfBirth: {
    type: DataTypes.STRING,
    field: 'place_of_birth'
  },
  playingSince: {
    type: DataTypes.INTEGER,
    field: 'playing_since'
  },
  position: {
    type: DataTypes.ENUM(['Goalkeeper', 'Defender', 'Midfielder', 'Forward', 'Coach'])
  },
  number: {
    type: DataTypes.INTEGER
  },
  image: {
    type: DataTypes.STRING
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at'
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at'
  },
}

class Player extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: PLAYER_TABLE,
      modelName: 'Player',
    }
  }
}

module.exports = { Player, PlayerSchema, PLAYER_TABLE }