// src/routes/admin.js
const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const createProductController = require('../controllers/createProductController'); 
const editProductController = require('../controllers/editProductController');
const deleteProductController = require('../controllers/deleteProductController');

const authMiddleware = require('../middlewares/authMiddleware'); // Importa el middleware de autenticación

// Ruta protegida por autenticación
router.get('/dashboard', authMiddleware, dashboardController.getProducts);
// Manejar solicitudes POST a /admin/dashboard (para la búsqueda)
router.post('/dashboard', authMiddleware, dashboardController.getProducts);

// Ruta para mostrar el formulario de creación de producto
router.get('/createProduct', authMiddleware, createProductController.showCreateForm);

// Ruta para procesar el formulario de creación de producto
router.post('/createProduct', authMiddleware, createProductController.processCreateForm);

router.get('/editProduct/:id', authMiddleware, editProductController.showEditForm);
router.post('/editProduct/:id', authMiddleware, editProductController.processEditForm);

router.post('/deleteProduct/:id', authMiddleware, deleteProductController.processDelete);

module.exports = router;
