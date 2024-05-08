const express = require("express");
const router = express.Router();
const mysql = require("mysql");

// Create MySQL connection pool
const pool = mysql.createPool({
  host: "srv1002.hstgr.io",
  user: "u407107406_shivanshu",
  password: "Shivanshu@chobeytf123567",
  database: "u407107406_tfpro",
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
