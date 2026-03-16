
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

const docFields = [
    "business_document",
    "id_front", "id_back",
    "license_front", "license_back",
    "insurance_certificate",
    "bank_statement_upload",
    "right_to_work_document"
];

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname).toLowerCase();

        if (docFields.includes(file.fieldname)) {
            if (![".png", ".jpg", ".jpeg", ".pdf"].includes(ext)) {
                return cb(new Error("Only images or PDF allowed for documents"));
            }
            return cb(null, true);
        }

        if (![".png", ".jpg", ".jpeg"].includes(ext)) {
            return cb(new Error("Only images (jpg, png, jpeg) are allowed"));
        }
        cb(null, true);
    }
});

module.exports = upload;