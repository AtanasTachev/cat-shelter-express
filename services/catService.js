const Cat = require('../models/catModel');

// console.log(Cat);

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

const catService = {
    getAll,
    getOne,
    create
}

module.exports = catService;