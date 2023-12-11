const express = require('express');
const router = express.Router();
const path = require('path');

const homeController = require('../controllers/homeController');
const carritoController = require('../controllers/carritoController');
const footerController = require('../controllers/footerController');
const itemController = require('../controllers/itemController');
const menuController = require('../controllers/menuController');
const shopController = require('../controllers/shopController');
const authRoutes = require('./auth'); // Importa las rutas de autenticación

// Rutas para tus archivos HTML
router.get('/', homeController.getHome);
router.get('/carrito', carritoController.getCarrito);
router.get('/footer', footerController.getFooter);
router.get('/item', itemController.getItem);
router.get('/menu', menuController.getMenu);
router.get('/shop', shopController.getShop);

// Agrega las rutas de autenticación
router.use('/auth', authRoutes);

module.exports = router;
