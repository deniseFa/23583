// authMiddleware.js
const authMiddleware = (req, res, next) => {
  if (!req.session || !req.session.user) {
    console.log('Usuario no autenticado. Redirigiendo...');
    return res.redirect('/auth/login');
  }
  console.log('Usuario autenticado:', req.session.user);
  next();
};

module.exports = authMiddleware;
