// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authControllers.js");
// Register route
router.post("/register", authController.register);
// Login route
router.post("/login", authController.login);


module.exports = router;
