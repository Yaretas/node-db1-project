const express = require("express");

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());

// server.use("/api/accounts", db);

module.exports = server;