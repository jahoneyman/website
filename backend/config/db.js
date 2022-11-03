const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createConnection({
  host: "us-cdbr-east-06.cleardb.net/",
  user: "b6b1db6516c364",
  password: "36e970de",
  database: "heroku_d48940c9c944788",
});

module.exports = db;
