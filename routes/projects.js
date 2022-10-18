var express = require("express");
const projectController = require("../controller/projectController");
var router = express.Router();


router.get("/projects",projectController.AllProjects)
router.get("/projects/:id",projectController.Project_details)





module.exports = router;