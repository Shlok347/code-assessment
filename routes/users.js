const express = require('express');
const router = express.Router();
const multer = require('multer');
//multer options
const storage = multer.diskStorage({
    destination: function(req, file, next) {
        next(null, './images/');
    },
    filename: function(req, file, next) {
        next(null, new Date().toIsoString() + file.originalname);
    }
})
const upload = multer({
    storage: storage
    })

const userController = require('../app/api/controllers/users');
router.post('/register', upload.single('avatar'), userController.create);
router.post('/authenticate', userController.authenticate);
module.exports = router;