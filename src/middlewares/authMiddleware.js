// authMiddleware.js
const authMiddleware = (req, res, next) => {
  if (!req.session || !req.session.user) {
    console.log('Usuario no autenticado. Redirigiendo...');
    return res.status(401).json({ message: 'Usuario no autenticado' });
  }
  console.log('Usuario autenticado:', req.session.user);
  next();
};

console.log('Inicio del middleware de autenticación');

module.exports = authMiddleware;
