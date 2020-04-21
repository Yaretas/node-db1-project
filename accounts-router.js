const express = require("express");

//database access using Knex
const db = require("../data/dbConfig.js"); //Conection to the database

const router = express.Router();

router.get("/", (req, res) => {
    //get data from the db
    //Send data back
    // Queries - SELECT * from post;
    db.select('*').from('accounts') // This will return a promise :)
        .then(rows => {
            res.status(200).json({
                accounts: rows
            });
        })
        .catch(error => {
            res.status(500).json({
                message: 'Sorry :( ran into an error!'
            })
        })
});

router.get("/:id", (req, res) => {});

router.post("/:id", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;