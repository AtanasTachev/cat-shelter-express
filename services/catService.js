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

const create = async (req, res) => {
    const {name, description, upload, breed} = req.body;
        let cat = new Cat({name, description, upload, breed});
    const savedCat = await cat.save();
    return true;
}

const catService = {
    getAll,
    getOne,
    create
}

module.exports = catService;