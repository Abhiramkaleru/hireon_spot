// config/db.js
const mysql = require('mysql2');
require('dotenv').config()

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting: ', err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);
});

// Convert to a promise-based interface so we can use async/await.
module.exports = connection.promise();
