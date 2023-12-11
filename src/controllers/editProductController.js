// src/controllers/editProductController.js
const editProductController = {};

// Mostrar el formulario para editar un producto
editProductController.showEditForm = async (req, res) => {
  try {
    const productId = req.params.id;

    // Obtener información del producto a editar desde la base de datos
    const [product] = await req.mysql.query('SELECT * FROM product WHERE product_id = ?', [productId]);

    // Obtener categorías y licencias desde la base de datos
    const [categorias] = await req.mysql.query('SELECT * FROM category');
    const [licencias] = await req.mysql.query('SELECT * FROM licence');

    res.render('admin/editProduct', { product: product[0], categorias, licencias });
  } catch (error) {
    console.error('Error al obtener datos para editar el producto:', error.message);
    res.status(500).send('Error interno del servidor');
  }
};

// Procesar el formulario para editar un producto
editProductController.processEditForm = async (req, res) => {
  try {
    const productId = req.params.id;
    const { categoria, licencia, nombre, descripcion, sku, precio, stock, descuento, cuotas } = req.body;

    // Actualizar los datos del producto en la base de datos
    const query = `
      UPDATE product
      SET product_name = ?, product_description = ?, price = ?, stock = ?, discount = ?, sku = ?, dues = ?, licence_id = ?, category_id = ?
      WHERE product_id = ?
    `;

    await req.mysql.query(query, [nombre, descripcion, precio, stock, descuento, sku, cuotas, licencia, categoria, productId]);

    res.redirect('/admin/dashboard');
  } catch (error) {
    console.error('Error al procesar el formulario de edición:', error.message);
    res.status(500).send('Error interno del servidor');
  }
};

module.exports = editProductController;
