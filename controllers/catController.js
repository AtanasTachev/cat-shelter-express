const catService = require('../services/catService.js');
const { Router } = require('express');
const Cat = require('../models/catModel.js');
const Breed = require('../models/breedModel.js')

const router = Router();

const addBreedPage = (req, res) => {
    res.render('addBreed')
}

const createCatPage = (req, res) => {
    res.render('addCat');
}

const createCat = async (req, res) => {
    const cat = new Cat({
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
        res.json({
            message: err
        })
    }
}

const addBreed = async (req, res) => {
    const breed = new Breed({
        breed: req.body.breed
    })
    try {
        const savedBreed = await breed.save();
        res.json(savedBreed)
        res.redirect('/');
    } catch (err) {
        res.json({ message: err })
    }
}


router.get('/add-cat', createCatPage);
router.post('/add-cat', createCat);
router.get('/add-breed', addBreedPage);
router.post('/add-breed', addBreed);

module.exports = router;

// router.get('/', async(req, res) => {
//     const cats = [];
//     try{
//         res.render('home', {
//     title: 'Cat Shelter'});
//         cats = await Cat.find();
//         res.json(cats);

//     } catch(err) {
//         res.json({message: err});
//     }
// });

// router.get('/', (req, res) => {
//     res.render('home', {
//         title: 'Cat Shelter'
//     });
// })


// router.get('/add-breed', (req, res) => {
//     res.render('addBreed')
// })
// router.post('/add-cat', async(req, res) => {

//     const cat = new Cat ({
//         name: req.body.name,
//         description: req.body.description,
//         upload: req.body.upload,
//         breed: req.body.breed
//         });

//     try {
//     const savedCat = await cat.save();
//     res.json(savedCat);
//     res.redirect('/');
// } catch (err) {
//     res.render('addCat', {
//         message: err
//     })
// }
// })

// router.get('/add-cat', (req, res) => {
//     res.render('addCat')
// })