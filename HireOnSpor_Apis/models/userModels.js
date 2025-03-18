const db = require("../config/db")

const findByEmail = async (email) => {
  try {
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    return rows[0]; // Return the first row (or undefined if not found)
  } catch (error) {
    throw new Error("Error fetching user by email: " + error.message);
  }
};

const createUser = async (name, email, hashedPassword, role) => {
  try {
    const [result] = await db.query(
      "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
      [name, email, hashedPassword, role]
    );
    return result; 
  } catch (error) {
    throw new Error("Error creating user: " + error.message);
  }
};

const findAllUsers = async () => {
  try {
    const [rows] = await db.query("SELECT * FROM users");
    return rows; // Return only the fetched data
  } catch (error) {
    throw new Error("Error fetching users: " + error.message);
  }
};


const updateUsers = async (userId, updatedData) => {
  try {
    const { name, email } = updatedData;
    const [result] = await db.query(
      "UPDATE users SET name = ?, email = ? WHERE id = ?",
      [name, email, userId]
    );

    if (result.affectedRows === 0) {
      throw new Error("User not found or no changes made");
    }

    return { message: "User updated successfully" };
  } catch (error) {
    throw new Error("Error updating user: " + error.message);
  }
};

// Delete user
const deleteUsers = async (userId) => {
  try {
    const [result] = await db.query("DELETE FROM users WHERE id = ?", [userId]);

    if (result.affectedRows === 0) {
      throw new Error("User not found");
    }

    return { message: "User deleted successfully" };
  } catch (error) {
    throw new Error("Error deleting user: " + error.message);
  }
};


module.exports = {
  findByEmail,
  createUser,
  findAllUsers,
  updateUsers,
  deleteUsers,
};

