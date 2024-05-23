const express = require("express");
const cors = require("cors");
const jobRoutes = require("./routes/jobRoutes");
const profileRoutes = require("./routes/profileRoutes");
const formRoutes = require("./routes/formRoutes");
const storeContactRoutes = require("./routes/storeContactRoutes");
const educationRoutes = require("./routes/educationRoutes"); // Import education routes
const experienceRoutes = require("./routes/experience");

require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/jobs", jobRoutes);
app.use("/profile", profileRoutes);
app.use("/form", formRoutes);
app.use("/store-contact", storeContactRoutes);
app.use("/education", educationRoutes); // Use education routes
app.use("/experience", experienceRoutes); // New route for experience data

// Start server
const PORT = process.env.PORT || 5000; // Use a default port if PORT is not defined in .env
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
