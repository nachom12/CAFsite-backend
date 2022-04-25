const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class ProductsService {
  async find() {
    const products = await models.Product.findAll();
    return products;
  }

  async findOne(id){
    const product = await models.Product.findByPk(id);
    if (!product){
      throw boom.notFound('product not found');
    }
    return product;
  }

  async update(id, changes) {
    const product = await this.findOne(id);
    const updatedProduct = product.update(changes);
    await product.save();
    return updatedProduct;
  }

  async create(data){
    const product = await models.Product.create(data);
    return product;
  }

  async delete(id){
    const product = await this.findOne(id);
    await product.destroy();
    return id;
  }
}

module.exports = ProductsService;