const express = require('express');

const catController = require('./controllers/catController.js');
const homeController = require('./controllers/homeController.js');
const uploadController = require('./controllers/uploadController');

const router = express.Router();

router.use(homeController);
router.use('/', catController);
router.use('/', uploadController);

module.exports = router;