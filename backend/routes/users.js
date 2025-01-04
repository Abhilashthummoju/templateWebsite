// routes/users.js
const express = require("express");
const db = require("../database");

const router = express.Router();

// Register endpoint
router.post("/register", (req, res) => {
  const { username, password } = req.body;
  console.log("COMING HEREEE", username, password);

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  const query = `INSERT INTO users (username, password) VALUES (?, ?)`;

  db.run(query, [username, password], function (err) {
    if (err) {
      if (err.code === "SQLITE_CONSTRAINT") {
        return res.status(409).json({ message: "Username already exists." });
      }
      return res.status(500).json({ message: "Internal server error." });
    }
    res
      .status(201)
      .json({ message: "User registered successfully.", userId: this.lastID });
  });
});

// Login endpoint
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  const query = `SELECT * FROM users WHERE username = ? AND password = ?`;

  db.get(query, [username, password], (err, row) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error." });
    }
    if (!row) {
      return res.status(401).json({ message: "Invalid username or password." });
    }
    res.status(200).json({ message: "Login successful.", user: row });
  });
});

module.exports = router;
