const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./config/db");
require("dotenv").config();

app.use(cors({ origin: "*", methods: ["GET", "POST"] }));

app.use(express.json());

// const db = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "2018-08000",
//   database: "portfolio",
// });

app.get("/", cors(), (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send("Welcome to our API service");
});

app.get("/api/test", cors(), (req, res) => res.send("in /api/test"));

app.post("/api/create", cors(), (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;

  db.query(
    `INSERT INTO messages(firstName, lastName, email, phone, message) VALUES (?,?,?,?,?)`,
    [firstName, lastName, email, phone, message],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/projects", cors(), (req, res) => {
  db.query("SELECT * FROM projects", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening to port: ${port}`);
});
