const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "me_api.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to SQLite database");
  }
});

// create tables
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS profile (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        sub_heading TEXT,
        email TEXT,
        github TEXT,
        linkedin TEXT,
        geeksforgeeks TEXT,
        portfolio TEXT,
        summary TEXT
    )
  `);
    db.run(`
    CREATE TABLE IF NOT EXISTS work (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      company TEXT,
      role TEXT,
      duration TEXT
    )
  `);
   db.run(`
    CREATE TABLE IF NOT EXISTS education (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        degree TEXT,
        institution TEXT,
        duration TEXT,
        score TEXT
    )
  `);
 db.run(`
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      description TEXT,
      link TEXT
    )
  `);
  db.run(`
    CREATE TABLE IF NOT EXISTS skills (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        category TEXT,
        name TEXT
    )
  `);
  db.run(`
  CREATE TABLE IF NOT EXISTS certifications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    issuer TEXT,
    year TEXT,
    link TEXT
  )
`);
});

module.exports = db;
