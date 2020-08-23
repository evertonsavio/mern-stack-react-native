const express = require('express');
const app = express();

app.use(express.json());

//////////////////////Variaveis de ambiente////////////////////
///////////////////////////////////////////////////////////////
require('dotenv').config();
const port = process.env.PORT || 3000;

///////////////////////////Dummy Data//////////////////////////
///////////////////////////////////////////////////////////////
const homes = [{id: 1, type: 'apartmento', description: 'Taio'}];

/////////////////////////////GET/////////////////////////////
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
/////////////////////////////POST/////////////////////////////
///////////////////////////////////////////////////////////////
app.post('/api/listing', (req, res) => {
  if (!req.body.type || !req.body.description) {
    return res.status(404).send('Type e descricao necessaria');
  }

  const home = {
    id: homes.length + 1,
    type: req.body.type,
    description: req.body.description,
  };
  homes.push(home);
  res.send(home);
});

///////////////////////////////////////////////////////////////
app.listen(port, () => {
  console.log(`Escutando a porta ${port}`);
});

// Middleware no Node é todo o tipo de função que está entre um
// pedido HTTP e a resposta final que o servidor envia de volta
// para o cliente
