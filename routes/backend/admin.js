var express = require("express");
const backendController = require("../../controller/backendController");
const authController = require("../../controller/authController");
var router = express.Router();

router.get("/admin",authController.main)//admin
router.post("/admin",authController.login);

router.post('/register',authController.createUser)
router.get("/admin/dashboard",backendController.Dashboard)
router.get("/about_us",backendController.About_us)
router.get("/project",backendController.Project)
router.get('/bannerImage',backendController.banner);//call for main index page
router.post('/bannerImage', backendController.banner);

router.get('/profile/:id',backendController.Homebanner);//to render users profile
router.get("/projects",backendController.AllProjects)//call for main index page
router.post('/project', backendController.projects);//call for signup post 
router.get('/projects',backendController.getProjects);//to render users profile
router.get('/recent_project', backendController.Projects);//call for main index page
router.post('/recent_project', backendController.Projects);//call for signup post 
router.get('/recent_project',backendController.getRecentProject);//to render users profile
router.post('/about', backendController.aboutUs);//call for main index page
router.get('/about',backendController.getAboutus);//call for signup post 
router.get("/about/delete/:id",backendController.deleteAboutBanner)
router.post("/updateSection2",backendController.updateSection2)
router.post("/updateMission",backendController.updateMission)
router.get("/delete/:id",backendController.deleteBanner)
router.get("/projects/delete/:id",backendController.deleteRecentProjects)
router.get("/testimonial/delete/:id",backendController.deleteTestimonial)
router.get('/Testimonial',backendController.Testimonial)
router.post('/testimonials',backendController.Testimonial)
router.get('/testimonials',backendController.getTestimonial);
router.get("/recent_project/delete/:id",backendController.deleteRecentProjects)

// painting projects

router.get("/painting_projects",backendController.AllPaintingProjects)//call for main index page
router.post('/painting_project', backendController.PaintingProjects);//call for signup post 
router.get('/painting_project',backendController.getPaintingProjects);
router.get("/delete/painting/:id",backendController.delete_painting_project)

//fabrication projects
router.get("/fabrication_projects",backendController.AllFabricationProjects)//call for main index page
router.post('/fabrication_project', backendController.FabricationProjects);//call for signup post 
router.get('/fabrication_project',backendController.getfabricationProjects);
router.get("/delete/fabrication/:id",backendController.delete_fabrication_project)


//Demolition Services
router.get("/demolition_projects",backendController.AllDemolitionProjects)//call for main index page
router.post('/demolition_project', backendController.DemolitionProjects);//call for signup post 
router.get('/demolition_project',backendController.getdemolitionProjects);
router.get("/delete/demolition/:id",backendController.delete_demolition_project)

//Erection
router.get("/erection_projects",backendController.AllErectionProjects)//call for main index page
router.post('/erection_project', backendController.ErectionProjects);//call for signup post 
router.get('/erection_project',backendController.geterectionProjects);
router.get("/delete/erection/:id",backendController.delete_erection_project)

//Coating services
router.get("/coating_projects",backendController.AllCoatingProjects)//call for main index page
router.post('/coating_project', backendController.CoatingProjects);//call for signup post 
router.get('/coating_project',backendController.getcoatingProjects);
router.get("/delete/coating/:id",backendController.delete_coating_project)

//Insulation services
router.get("/insulation_projects",backendController.AllInsulationProjects)//call for main index page
router.post('/insulation_project', backendController.InsulationProjects);//call for signup post 
router.get('/insulation_project',backendController.getinsulationProjects);
router.get("/delete/insulation/:id",backendController.delete_insulation_project)

//FRP
router.get("/frp_projects",backendController.AllFrpProjects)//call for main index page
router.post('/frp_project', backendController.FrpProjects);//call for signup post 
router.get('/frp_project',backendController.getfrpProjects);
router.get("/delete/frp/:id",backendController.delete_frp_project)

//manpower
router.get("/manpower_projects",backendController.AllmanpowerProjects)//call for main index page
router.post('/manpower_project', backendController.ManpowerProjects);//call for signup post 
router.get('/manpower_project',backendController.getmanpowerProjects);
router.get("/delete/manpower/:id",backendController.delete_manpower_project)
module.exports = router;