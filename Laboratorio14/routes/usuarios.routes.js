const express = require('express');

const router = express.Router();

const usuariosController = require('../controllers/usuarios.controller');

router.get('/logout', usuariosController.logout);

module.exports = router;