const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodepractice",
});

app.get("/", (req, res) => {
  // res.send("Hello, world!");
  const sql = "SELECT * FROM `react_node_crud` ";
  db.query(sql, (err, data) => {
    if (err) return err;
    return res.json(data);
  });
});

app.post("/create", (req, res) => {
  // res.send("Hello, world!");
  const sql =
    "INSERT INTO `react_node_crud`(`name`, `phone`, `email`) VALUES (?)";
  const values = [req.body.name, req.body.phone, req.body.email];
  db.query(sql, [values], (err, data) => {
    if (err) return err;
    return res.json(data);
  });
});

app.put("/update", (req, res) => {
  // res.send("Hello, world!");
  const sql =
    "UPDATE `react_node_crud` SET `name`=?,`phone`=?,`email`=? WHERE id=?";
  const values = [req.body.name, req.body.phone, req.body.email];
  const id = req.body.id;
  db.query(sql, [...values, id], (err, data) => {
    if (err) return err;
    return res.json(data);
  });
});

app.delete("/delete/:id", (req, res) => {
  // res.send("Hello, world!");
  const sql = "DELETE FROM `react_node_crud` WHERE id=?";
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) return err;
    return res.json(data);
  });
});

app.post("/signup", (req, res) => {
  // res.send("Hello, world!");
  const sql =
    "INSERT INTO `login_user`(`username`, `email`, `password`) VALUES (?)";
  const values = [req.body.username, req.body.email, req.body.password];
  db.query(sql, [values], (err, data) => {
    if (err) return err;
    return res.json(data);
  });
});

// Login Student
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT `email`, `password` FROM `login_user` WHERE `email` = ?";

  db.query(sql, email, (err, data) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    if (data.length === 0) {
      return res.status(401).json({ error: "Email not found" });
    }

    const user = data[0];

    if (user.password !== password) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    // Login successful
    return res.json({ message: "Login successful" });
  });
});

app.listen(8081, () => {
  console.log(`Server is running`);
});
