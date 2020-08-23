const express = require('express');

const app = express();

require('dotenv').config();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Alo Express!');
});

app.get('/api', (req, res) => {
  res.send([
    {id: 1, name: 'savio'},
    {id: 2, name: 'everton'},
    {id: 3, name: 'lucas'},
    {id: 4, name: 'santos'},
  ]);
});

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`);
});
