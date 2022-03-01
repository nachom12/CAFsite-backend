const express = require('express');
const UsersService = require('../services/users.service')
const validationHandler = require('../middleware/validationHandler');
const { createUserSchema, updateUserSchema } = require('../schemas/users.schema');

const router = express.Router();
const service = new UsersService();


router.get('/', async (req, res, next) => {
  try {
    const users = await service.find();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await service.findOne(id);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.post('/',
  validationHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const user = req.body;
      const createdUser = await service.create(user);
      res.json(createdUser);
    } catch (err) {
      next(err);
    }
  }
);

router.patch('/:id',
  validationHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = req.body;
      const updatedUser = await service.update(id, user);
      res.json(updatedUser);
    } catch (err) {
      next(err);
    }
  }
);

router.delete('/id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedUser = await service.delete(id);
    res.json(deletedUser);
  } catch (err) {
    next(err);
  }
});


module.exports = router;