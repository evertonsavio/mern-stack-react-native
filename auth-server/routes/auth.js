const express = require('express');

const route = express.Router();

route.post('/register', (req, res) => {
  res.send('register route');
});

route.post('/login', (req, res) => {
  res.send('login route');
});

module.exports = route;
