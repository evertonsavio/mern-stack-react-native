const mongoose = require('mongoose');

// Criando um Schema para o documento
const ImoveisSchema = new mongoose.Schema({
  title: {type: String, required: true},
  address: {type: String, required: true},
  homeType: String,
  description: String,
  price: {type: Number, required: true},
  image: String,
  yearBuild: Number,
});

//Criando um model

module.exports = mongoose.model('Imoveis', ImoveisSchema);
