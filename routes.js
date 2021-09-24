const express = require('express');

const catController = require('./controllers/catController.js');
const homeController = require('./controllers/homeController.js');

const router = express.Router();

router.use(homeController);
router.use('/cats', catController);

module.exports = router;