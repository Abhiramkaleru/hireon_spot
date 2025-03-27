// server.js
const express = require("express");
const cors = require("cors");
const authRoutes  = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes")
const jobsRoutes = require("./routes/jobRoutes")
const interestedjobs = require("./routes/intrestedjobsRoutes")
require("dotenv").config();

const app = express();

// app.use(cors());

app.use(cors({
  origin: ["http://localhost:5173", "https://hireon-spot.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  preflightContinue: false 

}));


app.use(express.json());

// app.options("*", (req, res) => {
//   res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.sendStatus(200);
// });

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin",adminRoutes);
app.use("/api/jobs",jobsRoutes)
app.use("/api/interested",interestedjobs)
app.get("/",(req,res)=>{
    res.send("ROOT API IS WORINKING")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
