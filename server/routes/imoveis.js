const express = require('express');
const Imovel = require('../models/Imovel');
const router = express.Router();
const {check, validationResult} = require('express-validator');

////////////////////////////VALIDACAO//////////////////////////
///////////////////////////////////////////////////////////////
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

///////////////////////////POST/api/imoveis////////////////////
///////////////////////////////////////////////////////////////
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

///////////////////////////GET/api/imoveis////////////////////
///////////////////////////////////////////////////////////////
router.get('/', (req, res) => {
  Imovel.find()
    .then((imoveis) => {
      res.send(imoveis);
    })
    .catch((err) => console.log(err));
});

router.get('/:id', (req, res) => {
  const imovelId = req.params.id;

  Imovel.findById(imovelId)
    .then((imovel) => {
      res.send(imovel);
    })
    .catch((err) => console.log(err));
});
///////////////////////////PUT/api/imoveis////////////////////
///////////////////////////////////////////////////////////////
router.put('/:id', [validate], (req, res) => {
  imovelId = req.params.id;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).send({errors: errors.array()});
  }

  Imovel.findById(imovelId)
    .then((house) => {
      house.title = req.body.title;
      house.address = req.body.address;
      house.homeType = req.body.homeType;
      house.description = req.body.description;
      house.price = req.body.price;
      house.image = req.body.image;
      house.yearBuild = req.body.yearBuild;

      return house.save();
    })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

///////////////////////////PUT/api/imoveis////////////////////
///////////////////////////////////////////////////////////////
router.delete('/:id', (req, res) => {
  const imovelId = req.params.id;

  Imovel.findByIdAndRemove(imovelId)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

//////////////////////////////////////////////////////////////
module.exports = router;
