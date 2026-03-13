
const express = require("express");
const router = express.Router();

const createStore = require("../controllers/storeController");
const upload = require("../utilities/multer");


router.post("/signupStore", 
    upload.fields([
        {name: "profile_photo", maxCount: 1},
        {name: "store_logo", maxCount: 1},
        {name: "banner_image", maxCount: 1}
    ]),
    createStore
);

module.exports = router;

