const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const fs = require('fs');
const path = require('path');
const db = require('./db');
const groupController = require("../src/controller/group");

app.use(bodyParser.json());

app.use(helmet());

app.use(cors());

const initializeDatabase = () => {
  const sql = fs.readFileSync(
    path.join(__dirname, "../tables.sql"),
    "utf8"
  );
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error creating table:", err);
    } else {
      console.log("Table created or already exists");
    }
  });
};

initializeDatabase();

app.get("/api/group", groupController.getGroup);

module.exports = app