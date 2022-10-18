var express = require("express");
const recent_projectController = require("../../controller/recent_projectController")
var router = express.Router();


router.get("/recent_projects",recent_projectController.recent_projects)
router.get("/recent_project/:id",recent_projectController.recent_project_details)






module.exports = router;