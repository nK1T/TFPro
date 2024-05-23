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

// Get the latest applicant data including contact and summary
router.get("/", async (req, res) => {
  try {
    const connection = await pool.getConnection();
    try {
      const [rows] = await connection.query("SELECT * FROM applicant ORDER BY id DESC LIMIT 1");
      const latestEntry = rows[0]; // Get the latest entry
      res.status(200).json(latestEntry);
    } finally {
      connection.release(); // Release connection back to the pool
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Store applicant contact data
router.post("/", async (req, res) => {
  const { name, email, picture, contactNo, summary } = req.body;

  try {
    // Log the submitted data
    console.log("Submitted Name:", name);
    console.log("Submitted Email:", email);
    console.log("Submitted Profile:", picture);
    console.log("Submitted Contact:", contactNo);
    console.log("Submitted Summary:", summary);

    const connection = await pool.getConnection();
    try {
            // Insert data into the 'applicant' table

      const query = "INSERT INTO applicant (fullName, email, profilePicture, contactNo, summary) VALUES (?, ?, ?, ?, ?)";
      await connection.query(query, [name, email, picture, contactNo, summary]);
     
      // Log profile update success message
      console.log("Profile updated successfully");

      // // Fetch and log the full table data
      // const [rows] = await connection.query("SELECT * FROM applicant");
      // console.log("Full Table Data:");
      // console.table(rows);

      // // Send response to client
      // res.status(200).json({ message: "Profile updated successfully" });
      res.status(200).json({ contactNo, summary });
    } finally {
      connection.release(); // Release connection back to the pool
    }
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
