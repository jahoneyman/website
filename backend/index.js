const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ origin: ["https://johnhoneyman.netlify.app", "http://localhost:3000/"] }));

const db = require("./config/db");

require("dotenv").config();

app.use(express.json());

app.get("/", (req, res) => res.send("Welcome to the Honeyman API Services"));

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

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening to port: ${port}`);
});
