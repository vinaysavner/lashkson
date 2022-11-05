var express = require("express");
const projectPagesController = require("../controller/projectPagesController");
var router = express.Router();


router.get("/paintings",projectPagesController.paintings)
router.get("/fabrications",projectPagesController.fabrications)
router.get("/demolition_services",projectPagesController.demolition_services)
router.get("/erection",projectPagesController.erection)
router.get("/insulation",projectPagesController.insulation)
router.get("/coating",projectPagesController.coating)
router.get("/frp_jobs",projectPagesController.frp_jobs)
router.get("/manpower_services",projectPagesController.manpower_services)



module.exports = router;