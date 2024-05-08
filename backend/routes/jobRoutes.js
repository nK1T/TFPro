// backend/src/routes/jobRoutes.js

const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
// const config = require("./config");
require("dotenv").config();

// Create MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Route to fetch job listings and log them to the console
router.get("/", (req, res) => {
  // Execute a query to fetch data from the jobs table
  pool.query("SELECT * FROM jobs", (err, results) => {
    if (err) {
      console.error("Error fetching job listings: ", err);
      res.status(500).json({ error: "Error fetching job listings" });
    } else {
      // Log the results to the console
      console.log("Job listings:");
      console.log(results);
      // Send the results as a JSON response
      res.status(200).json(results);
    }
  });
});

module.exports = router;
