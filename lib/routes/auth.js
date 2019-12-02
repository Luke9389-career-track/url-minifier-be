const { Router } = require('express');
const User = require('../model/User');

const MAX_AGE = 24 * 60 * 60 * 1000;

module.exports = Router()
  .post('/signup', (req, res, next) => {
    const { username, password } = req.body;
    User
      .create({ username, password })
      .then(user => {
        res.cookie('session', user.token(), {
          maxAge: MAX_AGE,
          httpOnly: true
        });
        res.send(user);
      })
      .catch(next);
  });
