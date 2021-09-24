const express = require('express');
const catService = require('../services/catService.js');

const router = express.Router();

const home = (req, res) => {
    let cats = catService.getAll();

    res.render('home', { cats });
};

router.get('/', home);

module.exports = router;