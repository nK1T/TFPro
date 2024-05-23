// routes/experience.js

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

// Store experience data
router.post("/", async (req, res) => {
  const { email, company, position, startDate, endDate } = req.body;

  try {
    const connection = await pool.getConnection();
    try {
      const experienceQuery =
        "INSERT INTO experience (applicantId, company, position, startDate, endDate) VALUES (?, ?, ?, ?, ?)";
      await connection.query(experienceQuery, [
        email,
        company,
        position,
        startDate,
        endDate,
      ]);

      res.status(200).json({ message: "Experience information saved successfully" });
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error("Error saving experience information:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


// Fetch experience data
router.get("/", async (req, res) => {
    try {
      const connection = await pool.getConnection();
      try {
        const [rows] = await connection.query("SELECT * FROM experience");
        res.status(200).json(rows);
      } finally {
        connection.release();
      }
    } catch (error) {
      console.error("Error fetching experience data:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

module.exports = router;
