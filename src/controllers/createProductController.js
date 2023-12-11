// src/controllers/createProductController.js
const createProductController = {};
const fs = require('fs');
const path = require('path');

// Mostrar el formulario para crear un nuevo producto
createProductController.showCreateForm = async (req, res) => {
  try {
    // Obtener categorías y licencias desde la base de datos
    const [categorias] = await req.mysql.query('SELECT * FROM category');
    const [licencias] = await req.mysql.query('SELECT * FROM licence');

    res.render('admin/createProduct', { categorias, licencias });
  } catch (error) {
    console.error('Error al obtener categorías y licencias:', error.message);
    res.status(500).send('Error interno del servidor');
  }
};

// Procesar el formulario para crear un nuevo producto
createProductController.processCreateForm = async (req, res) => {
  try {
    // Obtener datos del formulario
    const { categoria, licencia, nombre, descripcion, sku, precio, stock, descuento, cuotas } = req.body;

    // Utilizar un nombre fijo para las imágenes
    const imagenFront = '/uploads/comming-soon.webp';
    const imagenBack = '/uploads/comming-soon.webp';

    // Guardar los datos en la base de datos
    const query = `
      INSERT INTO product (product_name, product_description, price, stock, discount, sku, dues, licence_id, category_id, image_front, image_back)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await req.mysql.query(query, [nombre, descripcion, precio, stock, descuento, sku, cuotas, licencia, categoria, imagenFront, imagenBack]);

    // Redirigir a la página del panel de administración después de crear el producto
    res.redirect('/admin/dashboard');
  } catch (error) {
    console.error('Error al procesar el formulario:', error.message);
    res.status(500).send('Error interno del servidor');
  }
};

module.exports = createProductController;
