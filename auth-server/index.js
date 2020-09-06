const express = require ('express');
const mongoose = require ('mongoose');

const app = express ();
app.use (express.json ());

const authRoutes = require ('./routes/auth');

app.get ('/', (req, res) => {
  res.send ('Auth System');
});

app.use ('/api/users', authRoutes);

mongoose
  .connect (
    'mongodb+srv://king_auth:i7ozhLIT9qjjMoHW@cluster0.ucm6i.mongodb.net/auth_system?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then (() => {
    app.listen (3000, () => console.log ('Server is running'));
  })
  .catch (err => console.log (err));
