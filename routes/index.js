const express = require('express');
const playersRouter = require('./players.router');
const usersRouter = require('./users.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/players', playersRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;
