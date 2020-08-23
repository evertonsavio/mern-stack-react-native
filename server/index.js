const express = require('express');
const mongoose = require('mongoose');
const imoveis = require('./routes/imoveis');

const app = express();
app.use(express.json());
app.use('/api/imoveis', imoveis);

//////////////////////Variaveis de ambiente////////////////////
///////////////////////////////////////////////////////////////
require('dotenv').config();
const port = process.env.PORT || 3000;

///////////////////Conexao com MongoDB Cloud////////////////////
///////////////////////////////////////////////////////////////
mongoose
  .connect(
    'mongodb+srv://everluca:m50gMaTWP5Re3dBn@cluster0.ybkh2.azure.mongodb.net/imoveis_db?retryWrites=true&w=majority'
  )
  .then((result) => {
    app.listen(port, () => {
      console.log(`Escutando a porta ${port}`);
    });
  })
  .catch((err) => console.log(err));

///////////////////////////////////////////////////////////////
// Middleware no Node é todo o tipo de função que está entre um
// pedido HTTP e a resposta final que o servidor envia de volta
// para o cliente
