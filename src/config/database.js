// En tu archivo database.js
const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const pool = mysql.createPool({
  host: process.env.HOST || 'srv1015.hstgr.io',
  user: process.env.USER || 'u762466157_funko',
  password: process.env.PASS || 'CodoACodo2',
  database: process.env.DB || 'u762466157_funko',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const promisePool = pool.promise();

// Intenta conectarte y maneja errores
promisePool.getConnection()
  .then((connection) => {
    console.log('Conexión exitosa a la base de datos');
    connection.release();
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos:', err);
  });

module.exports = {
  conn: promisePool,
};
