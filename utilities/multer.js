const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + "-" + file.originalname;
        cb(null, uniqueName);
    }
});

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname).toLowerCase();

        if (file.fieldname === "business_document") {
            if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg" && ext !== ".pdf") {
                return cb(new Error("Only images or PDF allowed for business document"));
            }
            return cb(null, true);
        }

        if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
            return cb(new Error("Only images (jpg, png, jpeg) are allowed"));
        }
        cb(null, true);
    }
});

module.exports = upload;