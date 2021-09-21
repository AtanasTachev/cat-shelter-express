const express = require('express');
const handlebars = require('express-handlebars');
const router = express.Router;
const path = require('path');
require ('dotenv/config');

const app = express();

app.engine('hbs', handlebars ({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Cat Shelter'
    });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
