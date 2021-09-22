const mongoose = require('mongoose');

const CatSchema = mongoose.Schema ({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
        max: 50
    },
    upload: {
        type: String,
        require: true
    },
    breed: {
        type: String,
        require: true
    }
})

const Cat = mongoose.model('Cat', CatSchema);

module.exports = mongoose.model('Cat');