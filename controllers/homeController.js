const express = require('express');
const catService = require('../services/catService.js');

const router = express.Router();

const home = async (req, res) => {
    let cats = await catService.getAll();

    res.render('home', { cats });
};

router.get('/', home);

module.exports = router;