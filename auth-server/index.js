const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Auth System');
});

app.listen(3005, () => console.log('Server is running'));
