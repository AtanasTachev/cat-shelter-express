const upload = require('../services/multerSetup').upload;
const multer = require('../services/multerSetup');
const express = require('express');

module.exports.send = async(req, res) => {
    await upload.single('upload');
    console.log(req.body, req.files);
    res.send('ok');
}

