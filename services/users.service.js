const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { models } = require('../libs/sequelize');

class UsersService {
  async find() {
    const users = await models.User.findAll({
      attributes: { exclude: ['password'] }
    });
    return users;
  };

  async findOne(id) {
    const user = await models.User.findByPk(id, {
      attributes: { exclude: ['password'] }
    });
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  };

  async findByUserName(userName) {
    const user = await models.User.findOne({ where: { userName } });
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const updatedUser = user.update(changes);
    await user.save();
    return updatedUser;
  };

  async create(user) {
    try {
      const { password, ...newUser } = user;
      const encriptedPassword = bcrypt.hashSync(user.password, 8);
      newUser.password = encriptedPassword;
      const createdUser = await models.User.create(newUser);
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

  async verifyPassword(userName, password) {
    const user = await this.findByUserName(userName);
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const { password, ...rest } = user.dataValues;
      return rest;
    } else {
      throw boom.badRequest('unauthorized');
    }
  }
}

module.exports = UsersService;