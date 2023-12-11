// src/controllers/dashboardController.js
const dashboardController = {};

// Obtener lista de productos desde la base de datos y pasarla a la vista
dashboardController.getProducts = async (req, res) => {
  try {
    let query = `
      SELECT p.product_id, p.product_name, p.sku, c.category_name, l.licence_name
      FROM product p
      JOIN category c ON p.category_id = c.category_id
      JOIN licence l ON p.licence_id = l.licence_id
    `;

    const { termino } = req.body;

    if (termino) {
      // Agregar condiciones de búsqueda por nombre o SKU
      query += ` WHERE p.product_name LIKE ? OR p.sku LIKE ?`;
      // Ordenar por product_id en orden ascendente
      query += ` ORDER BY p.product_id ASC`;
      const [productos] = await req.mysql.query(query, [`%${termino}%`, `%${termino}%`]);
      res.render('admin/dashboard', { productos });
    } else {
      // Ordenar por product_id en orden ascendente
      query += ` ORDER BY p.product_id ASC`;
      const [productos] = await req.mysql.query(query);
      res.render('admin/dashboard', { productos });
    }
  } catch (error) {
    console.error('Error al obtener la lista de productos:', error.message);
    res.status(500).send('Error interno del servidor');
  }
};

module.exports = dashboardController;

