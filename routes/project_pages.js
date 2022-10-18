var express = require("express");
const projectPagesController = require("../controller/projectPagesController");
var router = express.Router();


router.get("/distilation",projectPagesController.distilation)
router.get("/tanks",projectPagesController.tanks)
router.get("/molasses_tank",projectPagesController.molasses_tank)
router.get("/evaporation_plant",projectPagesController.evaporation_plant)
router.get("/evaporation_project",projectPagesController.evaporation_project)
router.get("/project_photo",projectPagesController.project_photo)



module.exports = router;