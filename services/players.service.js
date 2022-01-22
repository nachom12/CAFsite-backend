const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class PlayersService {
  async find() {
    const players = await models.Player.findAll();
    return players;
  };

  async findOne(id) {
    const player = await models.Player.findByPk(id);
    if (!player){
      throw boom.notFound('player not found');
    }
    return player;
  };

  async update(id, changes) {
    console.log(changes);
    const player = await this.findOne(id);
    const updatedPlayer = player.update(changes);
    await player.save();
    return updatedPlayer;
  };

  async create(data) {
    console.log(data);
    const player = await models.Player.create(data);
    return player;
  };

  async delete(id) {
    const player = await this.findOne(id);
    await player.destroy();
    return id;
  };
}

module.exports = PlayersService;