// src/routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Rutas de autenticación
router.get('/login', authController.showLoginForm);
router.post('/login', authController.processLogin);
router.get('/register', authController.showRegisterForm);
router.post('/register', authController.processRegister);

module.exports = router;
