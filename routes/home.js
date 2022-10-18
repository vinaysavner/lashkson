var express = require("express");
const homeController = require("../controller/homeController");
var router = express.Router();


router.get("/",homeController.Home)
router.post("/createSection2",homeController.CreateSection2)
router.post("/createMission",homeController.CreateMission)








module.exports = router;