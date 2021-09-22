const express = require('express');
const router = express.Router;
const Cat = require('../models/catModel.js');

router.get('/', async(req, res) => {
    try{
        const cats = await Cat.find();
        res.json(cats);
    } catch(err) {
        res.json({message: err});
    }
});

module.exports = router;
