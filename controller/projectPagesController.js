
module.exports = {
    distilation:(req,res,next)=>{
         res.render("pages/projects/distilation", { title: "Express",active_nav: "home" });
     },
     tanks:(req,res,next)=>{
        res.render("pages/projects/tanks", { title: "Express",active_nav: "home" });
    },
    molasses_tank:(req,res,next)=>{
        res.render("pages/projects/molasses_tank", { title: "Express" ,active_nav: "home"});
    },
    evaporation_plant:(req,res,next)=>{
        res.render("pages/projects/evaporation_plant", { title: "Express", active_nav: "home" });
    },
    evaporation_project:(req,res,next)=>{
        res.render("pages/projects/evaporation_project", { title: "Express",active_nav: "home" });
    },
   project_photo:(req,res,next)=>{
        res.render("pages/projects/project_photo", { title: "Express",active_nav: "home" });
    },

 }