// src/controllers/deleteProductController.js
const deleteProductController = {};

// Procesar la solicitud de borrado de un producto
deleteProductController.processDelete = async (req, res) => {
  try {
    const productId = req.params.id;
    // Realizar la lógica para borrar el producto en la base de datos utilizando el productId
    await req.mysql.query('DELETE FROM product WHERE product_id = ?', [productId]);
    res.redirect('/admin/dashboard'); // Redirigir a la página del panel de administración después del borrado
  } catch (error) {
    console.error('Error al borrar el producto:', error.message);
    res.status(500).send('Error interno del servidor');
  }
};

module.exports = deleteProductController;
