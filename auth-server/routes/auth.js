const express = require ('express');
const User = require ('../models/users');

const route = express.Router ();

route.post ('/register', async (req, res) => {
  const user = new User ({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await user.save ();
    res.send (savedUser);
  } catch (error) {
    res.status (400).send (error);
  }
});

route.post ('/login', (req, res) => {
  res.send ('login route');
});

module.exports = route;
