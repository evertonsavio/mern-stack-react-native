const express = require('express');
const Imovel = require('../models/Imovel');
const router = express.Router();

///api/imoveis
router.post('/', (req, res) => {
  const imovel = new Imovel({
    title: req.body.title,
    address: req.body.address,
    homeType: req.body.homeType,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
    yearBuild: req.body.yearBuild,
  });

  imovel
    .save()
    .then((result) => {
      res.send({message: 'Dados criados com sucesso', data: result});
    })
    .catch((err) => console.log(err));
});

module.exports = router;
