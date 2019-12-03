const { Router } = require('express');
const Url = require('../model/Url');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { customUrl, longUrl } = req.body;
    Url
      .create({ customUrl, longUrl, hits: 0, user: req.user._id })
      .then(url => res.send(url))
      .catch(next);
  });
