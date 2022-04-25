const express = require('express');
const ProductsService = require('../services/products.service');
const { validationHandler } = require('../middleware/validationHandler');

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res, next) => {
  try {
    const products = await service.find();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

router.post('/',
  //validationHandler(createPlayerSchema, 'body'),
  async (req, res, next) => {
    try {
      const product = req.body;
      const createdProduct = await service.create(product);
      res.json(createdProduct);
    } catch (err) {
      next(err);
    }
  }
);

router.patch('/:id',
  //validationHandler(updatePlayerSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = req.body;
      const updatedProduct = await service.update(id, product);
      res.json(updatedProduct);
    } catch (err) {
      next(err);
    }
  }
);

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedProduct = await service.delete(id);
    res.json(deletedProduct);
  } catch (err) {
    next(err);
  }
});

module.exports = router;