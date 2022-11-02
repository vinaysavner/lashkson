var express = require("express");
const aboutController = require("../controller/aboutController");
var router = express.Router();


router.get("/about",aboutController.About)







module.exports = router;