const express = require('express');

const router = express.Router();

const pinturasController = require('../controllers/pinturas.controller');

router.get('/', pinturasController.listar);
router.get('/agregar', pinturasController.get_agregar);
router.post('/agregar', pinturasController.post_agregar);

module.exports = router;