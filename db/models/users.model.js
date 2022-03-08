const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users'

const UserSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  userName: {
    allowNull: false,
    field: 'user_name',
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    allowNull: false,
    field: 'password',
    type: DataTypes.STRING
  },
  role: {
    type: DataTypes.ENUM(['admin', 'user'])
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at'
  },
}

class User extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
    }
  }
}

module.exports = { User, UserSchema, USER_TABLE }