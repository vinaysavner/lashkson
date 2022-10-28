var express = require("express");
const backendController = require("../../controller/backendController");
const authController = require("../../controller/authController");
var router = express.Router();

router.get("/admin",authController.main)//admin
router.post("/admin",authController.login);
router.get('/logout',authController.logout)
router.post('/register',authController.createUser)
router.get("/admin/dashboard",backendController.Dashboard)
router.get("/about_us",backendController.About_us)
router.get('/bannerImage',backendController.banner);//call for main index page
router.post('/bannerImage', backendController.banner);
router.get('/profile/:id',backendController.Homebanner);//to render users profile
router.get("/projects",backendController.AllProjects)//call for main index page
router.post('/project', backendController.projects);//call for signup post 
router.get('/project',backendController.getProjects);//to render users profile
router.get('/recent_project', backendController.Projects);//call for main index page
router.post('/recent_project', backendController.Projects);//call for signup post 
router.get('/recent_project',backendController.getRecentProject);//to render users profile
router.get('/about', backendController.aboutUs);//call for main index page
router.post('/about', backendController.getAboutus);//call for signup post 
router.post("/updateSection2",backendController.updateSection2)
router.post("/updateMission",backendController.updateMission)

router.get("/recent_project/delete/:id",backendController.deleteRecentProjects)

module.exports = router;