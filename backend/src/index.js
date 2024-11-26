const express = require("express");
const cors = require("cors");
const roomRoutes = require("../routes/room");

const app = express();


const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], 
  allowedHeaders: ["Content-Type", "Authorization"], 
  credentials: true, 
};


app.use(cors(corsOptions));


app.options("*", cors(corsOptions));


app.use((req, res, next) => {
  console.log(
    `Request Method: ${req.method}, Request Headers: ${JSON.stringify(
      req.headers
    )}`
  );
  next();
});

app.use(express.json()); 


app.use("/api/rooms", roomRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
