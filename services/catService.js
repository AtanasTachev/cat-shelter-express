const Cat = require('../models/catModel');
const Breed = require('../models/breedModel')
// const upload = require('../services/multerSetup').upload;

const getAll = async(callback) => {
    const cat = await Cat.find().lean();
    return cat;
};

const getOne = async(id) => {
    try {
        const cat = await Cat.findById(id).lean();
        return cat;
    } catch (err) {
        console.error(err);
        return null;
    }
}

const create = (name, description, upload, breed) => {
    let cat = new Cat({name, description, upload, breed});
    return cat.save();
}

const saveBreed = (breed) => {
    let savedBreed = new Breed({breed});
    return savedBreed.save();
}

const catService = {
    getAll,
    getOne,
    create,
    saveBreed
}

module.exports = catService;