const env = process.env.NODE_ENV || 'development';
const catsRoute = require('./routes/catRoutes.js')
const app = require('express')();
const config = require('./config/config')[env];

require('./config/express.js')(app);

const mongoose = require('mongoose')
const path = require('path');
require ('dotenv/config');


mongoose.connect(process.env.DB_CONNECTION, () => {
console.log('Connected to DB...');
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


app.use('/', catsRoute);


app.listen(config.port, () => console.log(`Server running on port ${config.port}`));
