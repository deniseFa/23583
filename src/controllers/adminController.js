// src/controllers/adminController.js
const adminController = {};

// Mostrar el panel de administración
adminController.showDashboard = (req, res) => {
  res.render('admin/dashboard');
};

// Mostrar la lista de usuarios
adminController.showUsers = (req, res) => {
  res.render('admin/users');
};

// Otras funciones del panel de administración según tus necesidades

module.exports = adminController;
