const express = require('express');
const sale = require('./salesModel');

const router = express.Router();

router.get('/', (req, res) => {
    sale.find().then((data) => {
        res.json(data);
    }).catch((err) => {
        res.status(500).send("Something wrong in finding the data: ", err);
    })
})

module.exports = router;

