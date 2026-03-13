
const multer = require("multer");
const path = require("path");
const { Error } = require("sequelize");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + "-" + file.originalname;
        cb(null, uniqueName);
    }
})

const upload = multer({
    storage, 
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        if(ext != ".png" && ext != ".jpg" && ext != ".jpeg"){
            return cb(new Error ("Only Images are required")); 
        }
        cb(null, true);
    }
})

module.exports = upload;