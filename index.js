const express = require('express');
const handlebars = require('express-handlebars');
const router = express.Router;
const mongoose = require('mongoose')
const path = require('path');
require ('dotenv/config');

const app = express();

app.engine('hbs', handlebars ({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.use(express.static('./public'));

mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true, useUnifiedTopology: true}, () => {
console.log('Connected to DB...');
});
// mongoose.set('useCreateIndex', true);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Cat Shelter'
    });
})

app.get('/add-breed', (req, res) => {
    res.render('addBreed')
})
app.post('/add-cat', (req, res) => {
    let name = req.body.name;
    let description = req.body.description;
    let upload = req.body.upload;
    let breed = req.body.breed;

    let newCat = new Cat(name, description, upload, breed);

    cats.push(newCat);

    res.redirect('/');
})

app.get('/add-cat', (req, res) => {
    res.render('addCat')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
