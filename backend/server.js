const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./database");
const userRoutes = require("./routes/users");
const morgan = require("morgan"); // Import morgan
const cors = require("cors"); // Import cors

// Initialize Express app
const app = express();
const PORT = 8000;

// Middleware
app.use(morgan("dev")); // Setup morgan for logging HTTP requests
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Routes
app.use("/users", userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
