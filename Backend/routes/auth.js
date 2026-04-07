const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/db");

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;
  const hashed = await bcrypt.hash(password, 10);

  db.query(
    "INSERT INTO users (name,email,password,role) VALUES (?,?,?,?)",
    [name, email, hashed, role],
    (err) => {
      if (err) return res.send(err);
      res.send("User Registered");
    }
  );
});

// Login
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email=?", [email], async (err, result) => {
    if (result.length === 0) return res.send("User not found");

    const user = result[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) return res.send("Wrong password");

    const token = jwt.sign({ id: user.id, role: user.role }, "secret");

    res.json({ token, role: user.role, id: user.id });
  });
});

module.exports = router;