const mongoose = require("mongoose");

// Define the schema for the Applicant model
const applicantSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: false, // Assuming profile picture is optional
  },
  contactNo: {
    type: String,
    required: false, // Assuming contact number is optional
  },
});

// Create and export the Applicant model
module.exports = mongoose.model("Applicant", applicantSchema);
