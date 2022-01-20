const express = require('express');
const playersRouter = require('./players.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/players', playersRouter);
}

module.exports = routerApi;
