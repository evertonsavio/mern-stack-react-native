const express = require('express');
const Imovel = require('../models/Imovel');
const router = express.Router();
const {check, validationResult} = require('express-validator');

const validate = [
  check('title')
    .isLength({min: 3})
    .withMessage('Titulo deve ser maior que 3 caracteres'),
  check('description')
    .isLength({min: 3})
    .withMessage('Descricao deve ser maior que 3 caracteres'),
  check('address')
    .isLength({min: 3})
    .withMessage('Endereco deve ser maior que 3 caracteres'),
  check('price').isNumeric().withMessage('Forneca um valor valido'),
];

///api/imoveis
router.post('/', [validate], (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).send({errors: errors.array()});
  }

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
