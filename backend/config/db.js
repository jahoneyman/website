const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "2018-08000",
  database: "portfolio",
});

module.exports = db;
