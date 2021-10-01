const multer = require('multer');

const storage = multer.diskStorage({
    destination: './public/images',
    filename: function(req, file, cb) {
        cb(null,file.fieldname + '-' + Date.now() + 
        path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
}).single('upload');

module.exports = {upload, multer};