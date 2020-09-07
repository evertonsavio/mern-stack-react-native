const express = require('express');
const mongoose = require('mongoose');
const imoveis = require('./routes/imoveis');

const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/imoveis', imoveis);

//////////////////////Variaveis de ambiente////////////////////
///////////////////////////////////////////////////////////////
require('dotenv').config();
const port = process.env.PORT || 3000;
const user_db = process.env.DB_USERNAME;
const password_db = process.env.DB_PASSWORD;
const name_db = process.env.DB_NAME;

///////////////////Conexao com MongoDB Cloud////////////////////
///////////////////////////////////////////////////////////////
mongoose
  .connect(
    `mongodb+srv://${user_db}:${password_db}@cluster0.ybkh2.azure.mongodb.net/${name_db}?retryWrites=true&w=majority`,
    {useNewUrlParser: true, useUnifiedTopology: true}
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
