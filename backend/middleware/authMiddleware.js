// backend/src/middleware/authMiddleware.js

const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  // Verify JWT token
  jwt.verify(token, "your_secret_key", (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized: Invalid token" });
    }
    req.user = decoded; // Set the user object in the request
    next(); // Call the next middleware
  });
};

module.exports = { authMiddleware };
