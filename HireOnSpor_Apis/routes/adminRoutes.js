const express = require("express");
const router = express.Router();
const adminController = require("../controllers/authControllers.js");

// Define routes
router.get("/users", adminController.users);
router.post("/users/register", adminController.register);
router.put("/users/:id", adminController.updateUser);
router.delete("/users/:id", adminController.deleteUser);

module.exports = router; 
