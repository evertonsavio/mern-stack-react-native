const express = require('express');

const app = express();
const authRoutes = require('./routes/auth');

app.get('/', (req, res) => {
  res.send('Auth System');
});

app.use('/api/users', authRoutes);

app.listen(3005, () => console.log('Server is running'));
