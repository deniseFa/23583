// authMiddleware.js
const { validationResult } = require('express-validator');

const authMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(401).json({ errors: errors.array() });
  }
  console.log('Usuario autenticado:', req.session.user);
  next();
};

console.log('Inicio del middleware de autenticación');

module.exports = authMiddleware;
