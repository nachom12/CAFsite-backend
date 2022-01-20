

class PlayersService {
  find() {
    return { hello: 'world' }
  };

  findOne(id) {
    return { hello: 'findone' }
  };

  update(id, changes) {
    return { hello: 'update' }
  };

  create(data) {
    return { hello: 'create' }
  };

  delete(id) {
    return { hello: 'delete' }
  };

}

module.exports = PlayersService;