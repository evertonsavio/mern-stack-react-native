const jwt = require('jsonwebtoken');

//////////////////////Variaveis de ambiente////////////////////
///////////////////////////////////////////////////////////////
require('dotenv').config();
const SUPERSECRET = process.env.SUPERSECRET;
///////////////////////////////////////////////////////////////

module.exports = function (req, res, next) {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Acesso negado');

  try {
    const verified = jwt.verify(token, SUPERSECRET);
    req.user = verified;
    next();
  } catch (error) {
    req.status(400).send('Invalid Token');
  }
};
