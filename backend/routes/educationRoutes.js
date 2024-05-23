const express = require("express");
const router = express.Router();
const mysql = require("mysql2/promise");
require("dotenv").config();

// Create MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Store education data
router.post("/", async (req, res) => {
    const { institution, degree, fieldOfStudy, graduationYear } = req.body;

    try {
        const connection = await pool.getConnection();
        try {
            const educationQuery = "INSERT INTO education ( institution, degree, fieldOfStudy, graduationYear) VALUES (?, ?, ?, ?)";
            await connection.query(educationQuery, [institution, degree, fieldOfStudy, graduationYear]);

            res.status(200).json({ message: "Education information saved successfully" });
        } finally {
            connection.release();
        }
    } catch (error) {
        console.error("Error saving education information:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Fetch education data
router.get("/", async (req, res) => {
    try {
      const connection = await pool.getConnection();
      try {
        const [rows] = await connection.query("SELECT * FROM education");
        res.status(200).json(rows);
      } finally {
        connection.release();
      }
    } catch (error) {
      console.error("Error fetching education data:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

module.exports = router;
