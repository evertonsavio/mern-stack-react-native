const express = require('express');
const User = require('../models/users');
const {check, validationResult} = require('express-validator');

const route = express.Router();

const validate = [
  check('fullName').isLength({min: 2}).withMessage('Your name is required'),
  check('email').isEmail().withMessage('Not valid email'),
  check('password').isLength({min: 6}).withMessage('min 6 characters'),
];

route.post('/register', validate, async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()});
  }

  const user = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

route.post('/login', (req, res) => {
  res.send('login route');
});

module.exports = route;
