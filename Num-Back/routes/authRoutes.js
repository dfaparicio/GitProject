import express from 'express';
import authController from '../controllers/authController.js';

const router = express.Router();

// Definición de las rutas de autenticación
router.post('/login', authController.login);
router.post('/registro', authController.registro);

export default router;
