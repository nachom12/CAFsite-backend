const express = require('express');
const playersRouter = require('./players.router');
const usersRouter = require('./users.router');
const authRouter = require('./auth.router');
const productsRouter = require('./products.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/players', playersRouter);
  router.use('/users', usersRouter);
  router.use('/auth', authRouter);
  router.use('/products', productsRouter);
}

module.exports = routerApi;
