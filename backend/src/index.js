const express = require("express");
const cors = require("cors");
const roomRoutes = require("../routes/room");

const app = express();

// CORS Configuration
const corsOptions = {
  origin: "http://localhost:3000", // Allow requests from this origin
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  credentials: true, // Allow credentials (if you are using cookies or auth tokens)
};

// Use the CORS middleware
app.use(cors(corsOptions));

// Handle preflight OPTIONS requests for all routes
app.options("*", cors(corsOptions));

// Log incoming requests for debugging
app.use((req, res, next) => {
  console.log(
    `Request Method: ${req.method}, Request Headers: ${JSON.stringify(
      req.headers
    )}`
  );
  next();
});

app.use(express.json()); // For parsing JSON request bodies

// Room Routes
app.use("/api/rooms", roomRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
