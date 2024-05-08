// backend/src/routes/profileroutes.js

const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
// const config = require("./config");
require("dotenv").config();

// Create MySQL connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// Route to store contact information
router.post("/contact", (req, res) => {
  const { contactNo } = req.body;
  const sql = "INSERT INTO applicant (contactNo) VALUES (?)";
  connection.query(sql, [contactNo], (err, result) => {
    if (err) {
      console.error("Error storing contact information:", err);
      res
        .status(500)
        .json({ error: "An error occurred while storing contact information" });
      return;
    }
    console.log("Contact information stored successfully");
    res
      .status(200)
      .json({ message: "Contact information stored successfully" });
  });
});

// Route to retrieve contact information
router.get("/contact", (req, res) => {
  const sql = "SELECT contactNo FROM applicant ORDER BY id DESC LIMIT 1";
  // console.log(sql);
  connection.query(sql, (err, result) => {
    if (err) {
      console.error("Error retrieving contact information:", err);
      res
        .status(500)
        .json({
          error: "An error occurred while retrieving contact information",
        });
      return;
    }
    if (result.length === 0) {
      res.status(404).json({ error: "No contact information found" });
      return;
    }
    const contactNo = result[0].contactNo;
    res.status(200).json({ contactNo });
  });
});

module.exports = router;
