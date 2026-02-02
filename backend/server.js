const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']); // Force public DNS to resolve Atlas SRV records

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

// CONNECT DB FIRST
connectDB();

const app = express();
app.get("/", (req, res) => {
  res.send("Netflix Reviews Backend Running");
});

app.use("/api/reviews", require("./routes/reviewRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
