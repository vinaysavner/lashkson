var express = require("express");
const contactController = require('../controller/contactController')
var router = express.Router();


router.get("/contact",contactController.ContactUs)








module.exports = router;