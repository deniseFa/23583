const mysql = require('mysql');
const databaseConfig = require('../config/database');


exports.getHome = (req, res) => {
  res.render('index.ejs');
};

