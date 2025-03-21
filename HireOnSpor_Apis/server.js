// server.js
const express = require("express");
const cors = require("cors");
const authRoutes  = require("./routes/authRoutes");
const adminRoutes=require("./routes/adminRoutes")
const jobsRoutes=require("./routes/jobRoutes")
require("dotenv").config();

const app = express();

Middleware//
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin",adminRoutes);
app.use('/api/jobs',jobsRoutes)
app.get("/",(req,res)=>{
    res.send("ROOT API IS WORINKING")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
