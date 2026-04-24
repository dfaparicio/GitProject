const express = require('express');
const router = express.Router();
const { registrarUsuario } = require('../controllers/authController');

// Endpoint de Registro de Usuarios (HUS-02)
router.post('/register', registrarUsuario);

module.exports = router;
