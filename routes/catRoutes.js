// const express = require('express');
const {Router} = require('express');
const Cat = require('../models/catModel.js');

const router = Router();

// router.get('/', async(req, res) => {
//     const cats = [];
//     try{
//         cats = await Cat.find();
//         res.json(cats);
//     } catch(err) {
//         res.json({message: err});
//     }
// });

router.get('/', (req, res) => {
    res.render('home', {
        title: 'Cat Shelter'
    });
})


router.get('/add-breed', (req, res) => {
    res.render('addBreed')
})
router.post('/add-cat', (req, res) => {
    let name = req.body.name;
    let description = req.body.description;
    let upload = req.body.upload;
    let breed = req.body.breed;

    let newCat = new Cat(name, description, upload, breed);
try {
    await (newCat).save();
    res.redirect('/');
} catch (err) {
    res.render('add-cat', {
        message: err
    })
}
})

router.get('/add-cat', (req, res) => {
    res.render('addCat')
})

module.exports = router;
