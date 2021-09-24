const catService = require('../services/catService.js');
const {Router} = require('express');
const Cat = require('../models/catModel.js');

const router = Router();

const addBreedPage = (req, res) => {
    res.render('addBreed')
}

const createCatPage = (req, res) => {
    res.render('addCat');
}

const createCat = async(req, res, {name, description, upload, breed}) => {
    const cat = new Cat({name, description, upload, breed});
    try {
            const savedCat = await cat.save();
            // res.json(savedCat);
            res.redirect('/');
        } catch (err) {
            res.render('addCat', {
                message: err
            })
        }
}

const addBreed = 



router.post('/add-cat', createCat)
router.get('/add-cat', createCatPage);
router.get('/add-breed', addBreedPage);

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