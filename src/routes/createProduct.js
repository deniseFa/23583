// src/routes/createProduct.js
const express = require('express');
const router = express.Router();
const createProductController = require('../controllers/createProductController');

// Mostrar formulario para crear un nuevo producto
router.get('/new', createProductController.showCreateForm);

// Procesar formulario para crear un nuevo producto
router.post('/new', createProductController.processCreateForm);

module.exports = router;
