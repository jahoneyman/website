const mysql = require("mysql");
require("dotenv").config();

// const db = mysql.createConnection({
//   host: "us-cdbr-east-06.cleardb.net/",
//   user: "b27eb540dd0adf",
//   password: "fa8fba3f",
//   database: "heroku_cfcf6f50626285b",
// });

const connectionDetails = () => {
  if (process.env.CLEAR_DATABASE_URL) {
    return `${process.env.CLEAR_DATABASE_URL}`;
  }
  return {
    database: `${process.env.DB}`,
    host: `${process.env.DB_HOST}`,
    user: `${process.env.DB_USER}`,
    password: `${process.env.DB_USER_PASSWORD}`,
  };
};

const connection = mysql.createConnection(connectionDetails());

module.exports = connection;
