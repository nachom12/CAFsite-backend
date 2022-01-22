const express = require('express');
const PlayersService = require('../services/players.service');
const validationHandler = require('../middleware/validationHandler');
const { createPlayerSchema, updatePlayerSchema } = require('../schemas/players.schema')


const router = express.Router();
const service = new PlayersService();

router.get('/', async (req, res, next) => {
  try {
    const players = await service.find();
    res.json(players);
  } catch (err) {
    next(err);
  }
});

router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const player = await service.findOne(id);
      res.json(player);
    } catch (err) {
      next(err);
    }
  });

router.post('/',
  validationHandler(createPlayerSchema, 'body'),
  async (req, res, next) => {
    try {
      const player = req.body;
      const createdPlayer = await service.create(player);
      res.json(createdPlayer);
    } catch (err) {
      next(err);
    }
  });


router.patch('/:id',
  validationHandler(updatePlayerSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const player = req.body;
      const updatedPlayer = await service.update(id, player);
      res.json(updatedPlayer);
    } catch (err) {
      next(err);
    }
  });

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedPlayer = await service.delete(id);
    res.json(deletedPlayer);
  } catch (err) {
    next(err);
  }
});


module.exports = router;