const upload = require('../services/multerSetup').upload;
const multer = require('../services/multerSetup');
const express = require('express');
const router = express.Router();

//const upload = async (req, res) => {
   // let image = await 
//}

module.exports.send = async(req, res) => {
    await upload.single('upload');
    console.log(req.body, req.files);
    res.send('ok');
}

module.exports = router;