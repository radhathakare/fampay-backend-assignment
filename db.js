const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const {createPool} = require('mysql2');

if (
  process.env.DATABASE_HOST &&
  process.env.DATABASE_PORT &&
  process.env.DATABASE_USER &&
  process.env.DATABASE_PASS &&
  process.env.DATABASE_NAME
) {
  console.log("Database Connect Successful!");
} else {
  throw new Error(`Cannot connect.`);
}

// Creating a database connection socket
const connection = mysql.connect({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
});

// Checking database connection socket
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database " + err.stack);
    return;
  }
  console.log("Successfully Connected to Database");
});

const selectMultiple = async (query, ...args) => {
  const [rows] = await connection.promise().query(query, args);
  return rows;
};

const insertQuery = async (query, ...args) => {
  await connection.promise().query(query, args);
};

module.exports = {
  selectMultiple,
  insertQuery,
};
