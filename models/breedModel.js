const mongoose = require('mongoose');

const BreedSchema = mongoose.Schema ({
    breed: {
        type: String,
        required: true
    }
})

const Breed = mongoose.model('Breed', BreedSchema);

module.exports = mongoose.model('Breed');