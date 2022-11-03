const express = require("express");
const app = express();
const db = require("./config/db");
require("dotenv").config();

const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

const port = process.env.PORT || 5000;

// const db = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "2018-08000",
//   database: "portfolio",
// });

app.get("/", (req, res) => res.send("Welcome to our API service"));

app.get("/api/test", (req, res) => res.send("in /api/test"));

app.post("/api/create", (req, res) => {
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

app.get("/projects", (req, res) => {
  db.query("SELECT * FROM projects", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is listening to port: ${port}`);
});
