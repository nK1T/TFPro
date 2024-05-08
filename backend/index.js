const express = require("express");
const cors = require("cors");
const jobRoutes = require("./routes/jobRoutes");
const profileRoutes = require("./routes/profileRoutes");
const formRoutes = require("./routes/formRoutes");
const storeContactRoutes = require("./routes/storeContactRoutes"); // Import storeContactRoutes

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/jobs", jobRoutes);
app.use("/profile", profileRoutes);
app.use("/form", formRoutes);
app.use("/store-contact", storeContactRoutes); // Use storeContactRoutes

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
