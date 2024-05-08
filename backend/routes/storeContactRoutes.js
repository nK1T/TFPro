const express = require("express");
const router = express.Router();
const mysql = require("mysql");
// const config = require("./config");
require("dotenv").config();

// Create MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Route to store contact information
router.post("/", (req, res) => {
  const { contactNo, summary } = req.body;

  // Insert the contact information into the database
  pool.query(
    "INSERT INTO applicant (contactNo, summary) VALUES (?, ?)",
    [contactNo, summary],
    (err, result) => {
      if (err) {
        console.error("Error storing contact information:", err);
        res
          .status(500)
          .json({ message: "Failed to store contact information" });
      } else {
        res
          .status(200)
          .json({ message: "Contact information stored successfully" });
      }
    }
  );
});

module.exports = router;
