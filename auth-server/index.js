const express = require ('express');
const mongoose = require ('mongoose');

const app = express ();
app.use (express.json ());

const authRoutes = require ('./routes/auth');
const verifyToken = require ('./routes/verifyToken');

//////////////////////Variaveis de ambiente////////////////////
///////////////////////////////////////////////////////////////
require ('dotenv').config ();
const CONEXAO_VAR = process.env.CONEXAO;
///////////////////////////////////////////////////////////////

app.get ('/', (req, res) => {
  res.send ('Auth System');
});

app.get ('/api/user/profile', verifyToken, (req, res) => {
  res.send ({sucess: true, data: req.user});
});

app.use ('/api/users', authRoutes);

mongoose
  .connect (CONEXAO_VAR, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then (() => {
    app.listen (3000, () => console.log ('Server is running'));
  })
  .catch (err => console.log (err));
