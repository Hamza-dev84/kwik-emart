

const express = require("express");
const router = express.Router();
const createDriver = require("../controllers/driverController");
const upload = require("../utilities/multer");

router.post("/signupDriver",
    upload.fields([
        {name: "profile_photo", maxCount: 1},
        {name: "id_front", maxCount: 1},
        {name: "id_back", maxCount: 1},
        {name: "license_front", maxCount: 1},
        {name: "license_back", maxCount: 1},
        {name: "insurance_cetificate", maxCount: 1},
        {name: "bank_statement_upload", maxCount: 1},
        {name: "right_to_work_document", maxCount: 1}
    ]),
    createDriver
);

module.exports = router;