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

// Route to handle form submission
router.post("/", (req, res) => {
  const formData = req.body;
  const {
    title,
    companyName,
    location,
    description,
    employementType,
    experience,
    salary,
    companyLogo,
  } = formData;

  // Insert form data into MySQL database using a connection from the pool
  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .json({ error: "An error occurred while connecting to the database" });
    } else {
      const sql =
        "INSERT INTO jobs (title, companyName, location, description, employementType, experience, salary, companyLogo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
      connection.query(
        sql,
        [
          title,
          companyName,
          location,
          description,
          employementType,
          experience,
          salary,
          companyLogo,
        ],
        (err, result) => {
          connection.release(); // Release the connection back to the pool
          if (err) {
            console.log(err);
            res
              .status(500)
              .json({
                error: "An error occurred while storing data in the database",
              });
          } else {
            console.log("Data inserted successfully");
            res.status(200).json({ message: "Data inserted successfully" });
          }
        }
      );
    }
  });
});

// In your formRoutes.js or wherever you define your routes
router.get("/", (req, res) => {
  // Render a form for creating job listings or return appropriate response
  res.send("This is the form page");
});


module.exports = router;
