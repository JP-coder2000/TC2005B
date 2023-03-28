const express = require('express');

const router = express.Router();

const hasCreate = require('../utils/has-create');

const pinturasController = require('../controllers/pinturas.controller');

router.get('/buscar/:valor_busqueda', pinturasController.get_buscar);

router.get('/', pinturasController.listar);

router.get('/agregar', hasCreate, pinturasController.get_agregar);

router.post('/agregar', hasCreate, pinturasController.post_agregar);

module.exports = router;
