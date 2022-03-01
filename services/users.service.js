const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class UsersService {
  async find() {
    const users = await models.User.findAll();
    return users;
  };

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  };

  async update(id, changes) {
    const user = await this.findOne(id);
    const updatedUser = user.update(changes);
    await user.save();
    return updatedUser;
  };

  async create(user) {
    try {
      const createdUser = await models.User.create(user);
      return createdUser;
    } catch (err) {
      throw boom.badRequest(err.message);
    }
  };

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return id;
  };
}

module.exports = UsersService;