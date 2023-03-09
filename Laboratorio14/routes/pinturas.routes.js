const express = require('express');

const router = express.Router();

const pinturasController = require('../controllers/pinturas.controller');

router.get('/nuevo', pinturasController.get_nuevo);

router.post('/nuevo', pinturasController.post_nuevo);

router.get('/', pinturasController.listar);

module.exports = router;