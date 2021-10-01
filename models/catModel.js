const mongoose = require('mongoose');

const CatSchema = mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        max: 50
    },
    upload: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    }
})

const Cat = mongoose.model('Cat', CatSchema);

module.exports = mongoose.model('Cat');