const express = require('express');
const passport = require('passport');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { config } = require('../config/config');

router.post('/', 
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
  try {
    let user = req.user;
    user.token = jwt.sign(req.user, config.secret , { expiresIn: '1d' })
    res.json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;