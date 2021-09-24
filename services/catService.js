const Cat = require('../models/catModel');

const getAll = () => Cat.cats;

const getOne = (id) => Cat.cats.find(x => x.id ==id);

const create = (name, description, upload, breed) => {
    let cat = new Cat(name, description, upload, breed);
    Cat.bulkSave(cat);
}

const catService = {
    getAll,
    getOne,
    create
}

module.exports = catService;