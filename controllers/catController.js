const catService = require('../services/catService.js');
const { Router } = require('express');
const Cat = require('../models/catModel.js');
const Breed = require('../models/breedModel.js')
const upload = require('../services/multerSetup').upload;

const router = Router();

const addBreedPage = (req, res) => {
    res.render('addBreed')
}

const createCatPage = async (req, res) => {
    let breeds = [];
    breeds = await Breed.find({}).lean();
    try {
        res.render('addCat', {breeds});
    } catch(err) {
        res.atatus(400);
        res.send({
            message: err
        })
    }
    
}

const createCat = async (req, res) => {
    // let toUpload = uploadF.upload(req.file);
    // console.log(toUpload);
    // let upload = req.file;
    let { name, description, upload, breed } = req.body;

    try {
        await catService.create(name, description, upload, breed);
        res.redirect('/');
        console.log(upload);
    } catch (err) {
        res.status(400);
        res.send({
            message: err
        })
    }
    console.log({...req.body, file: req.file});
}

const addBreed = async (req, res) => {
    let breeds = [];
    let {breed} = req.body;
    try {
        await catService.saveBreed(breed);
        res.redirect('/');
    } catch (err) {
        res.status(400);
        res.send({ message: err })
    }
}

//upload.single('upload')
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