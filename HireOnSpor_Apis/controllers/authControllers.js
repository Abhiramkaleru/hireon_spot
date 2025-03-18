// controllers/authController.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModels");
require("dotenv").config();

// Registration: Only job seekers can self-register (role forced to "job_seeker")
exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // const role = "job_seeker"; // Force self-registered users as job seekers

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user exists
    const existingUser = await UserModel.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in the database
    await UserModel.createUser(name, email, hashedPassword, role);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Login: Allow only job seekers (and guests) to log in
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await UserModel.findByEmail(email);
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.users = async (req, res) => {
  try {
    const users = await UserModel.findAllUsers(); // Fetch all users
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const result = await UserModel.updateUsers(id, { name, email, role });
    res.status(200);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.json({ error: error.message });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserModel.deleteUsers(id);
    res.status(200);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.json({ error: error.message });
  }
};
