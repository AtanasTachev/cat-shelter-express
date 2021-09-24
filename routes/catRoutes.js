// const express = require('express');
const {Router} = require('express');
const Cat = require('../models/catModel.js');

const router = Router();

router.get('/', async(req, res) => {
    const cats = [];
    try{
        res.render('home', {
    title: 'Cat Shelter'});
        cats = await Cat.find();
        res.json(cats);
    
    } catch(err) {
        res.json({message: err});
    }
});

// router.get('/', (req, res) => {
//     res.render('home', {
//         title: 'Cat Shelter'
//     });
// })


router.get('/add-breed', (req, res) => {
    res.render('addBreed')
})
router.post('/add-cat', async(req, res) => {

    const cat = new Cat ({
        name: req.body.name,
        description: req.body.description,
        upload: req.body.upload,
        breed: req.body.breed
        });

    try {
    const savedCat = await cat.save();
    res.json(savedCat);
    res.redirect('/');
} catch (err) {
    res.render('addCat', {
        message: err
    })
}
})

router.get('/add-cat', (req, res) => {
    res.render('addCat')
})

module.exports = router;
