const express = require('express');
const User = require('../models/users');
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');

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

  const userExists = await User.findOne({email: req.body.email});
  if (userExists) return res.status(400).send({erro: 'email ja existe'});

  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    password: hashPassword,
  });
  try {
    const savedUser = await user.save();
    res.send({
      id: savedUser._id,
      fullName: savedUser.fullName,
      email: savedUser.email,
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

route.post('/login', (req, res) => {
  res.send('login route');
});

module.exports = route;
