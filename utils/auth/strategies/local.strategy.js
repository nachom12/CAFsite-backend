const { Strategy } = require('passport-local');
const UsersService = require('../../../services/users.service')

const service = new UsersService();

const LocalStrategy = new Strategy(
  { usernameField: 'userName', passwordField: 'password', session: false },
  async (username, password, done) => {
    try {
      const user = await service.verifyPassword(username, password);
      if (!user) {
        done(null, false);
      } else {
        done(null, user);
      }
    } catch (err) {
      done(err, false);
    }
  }
);

module.exports = LocalStrategy;

