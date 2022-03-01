const express = require('express');
const passport = require('passport');
const router = express.Router();

router.post('/', 
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
  try {
    res.json(req.user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;