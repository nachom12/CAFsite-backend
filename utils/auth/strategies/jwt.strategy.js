const { Strategy, ExtractJwt } = require('passport-jwt');
const { config } = require('../../../config/config');

const opts = {
  secretOrKey: config.secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

const JWTStrategy = new Strategy(opts, (jwt_payload, done) => {
  return done(null, jwt_payload);
});

module.exports = JWTStrategy;