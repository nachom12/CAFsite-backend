const { Model, DataTypes, Sequelize } = require('sequelize');

const PRODUCTS_TABLE = 'products'

const ProductSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING
  },
  price: {
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

class Product extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCTS_TABLE,
      modelName: 'Product',
    }
  }
}

module.exports = { Product, ProductSchema, PRODUCTS_TABLE }