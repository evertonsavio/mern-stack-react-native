const express = require ('express');
const User = require ('../models/users');
const {check, validationResult} = require ('express-validator');
const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');

const route = express.Router ();

///////////////////////////VARIAVEIS DE AMBIENTE////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
require ('dotenv').config ();
const SUPERSECRET = process.env.SUPERSECRET;
//CRIAR .env file na raix do projeto e dentro setar suas variaveis
//Exemplo: SUPERSECRET = 'SuPEr$ECR3t'

///////////////////////////VALIDACAO DE FORMULARIO//////////////////////////////
////////////////////////////////////////////////////////////////////////////////
const validate = [
  check ('fullName').isLength ({min: 2}).withMessage ('Your name is required'),
  check ('email').isEmail ().withMessage ('Not valid email'),
  check ('password').isLength ({min: 6}).withMessage ('min 6 characters'),
];

//////////////////////////////GERAR TOKEN//////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
const generateToken = user => {
  return jwt.sign (
    {_id: user._id, email: user.email, fullName: user.fullName},
    SUPERSECRET
  );
};

////////////////////////////////ROTAS/////////////////////////////////////////
route.post ('/register', validate, async (req, res) => {
  const errors = validationResult (req);

  if (!errors.isEmpty ()) {
    return res.status (400).json ({errors: errors.array ()});
  }

  const userExists = await User.findOne ({email: req.body.email});
  if (userExists)
    return res.status (400).send ({success: false, message: 'Email ja existe'});

  const salt = await bcrypt.genSalt ();
  const hashPassword = await bcrypt.hash (req.body.password, salt);

  const user = new User ({
    fullName: req.body.fullName,
    email: req.body.email,
    password: hashPassword,
  });
  try {
    const savedUser = await user.save ();
    //Criar e assinar um token // ESTRANHO estar na rota de registro
    const token = generateToken (user);
    res.send ({
      success: true,
      data: {
        id: savedUser._id,
        fullName: savedUser.fullName,
        email: savedUser.email,
      },
      token,
    });
  } catch (error) {
    res.status (400).send ({success: false, error});
  }
});

///////////////////////////LOGIN//////////////////////////////

const loginValidate = [
  check ('email').isEmail ().withMessage ('Not valid email'),
  check ('password').isLength ({min: 6}).withMessage ('min 6 characters'),
];

route.post ('/login', loginValidate, async (req, res) => {
  const errors = validationResult (req);

  if (!errors.isEmpty ()) {
    return res.status (400).json ({errors: errors.array ()});
  }
  //checar se o email existe,
  const user = await User.findOne ({email: req.body.email});
  console.log (user);
  if (!user)
    return res
      .status (404)
      .send ({success: false, message: 'Usuario nao existe'});
  //chechar se o password confere
  const validPassword = await bcrypt.compare (req.body.password, user.password);
  if (!validPassword)
    return res.status (404).send ({success: false, message: 'Invalido login'});

  //Criar e assinar um token
  const token = generateToken (user);
  res
    .header ('auth-token', token)
    .send ({success: true, message: 'Logged In', token});
});

module.exports = route;
