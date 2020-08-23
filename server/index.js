const express = require('express');
const app = express();

//////////////////////Variaveis de ambiente////////////////////
///////////////////////////////////////////////////////////////
require('dotenv').config();
const port = process.env.PORT || 3000;

///////////////////////////Dummy Data//////////////////////////
///////////////////////////////////////////////////////////////
const homes = [{id: 1, type: 'apartmento', cidade: 'Taio'}];

/////////////////////////////Rotas/////////////////////////////
///////////////////////////////////////////////////////////////
app.get('/', (req, res) => {
  res.send('Alo Express!');
});

app.get('/api/listing', (req, res) => {
  res.send(homes);
});

app.get('/api/listing/:id', (req, res) => {
  const imovel_por_id = homes.find(
    (casa) => casa.id === parseInt(req.params.id)
  );

  if (!imovel_por_id) {
    res.status(404).send('Imovel nao encontrado');
  } else {
    res.send(imovel_por_id);
  }
});

///////////////////////////////////////////////////////////////
app.listen(port, () => {
  console.log(`Escutando a porta ${port}`);
});
