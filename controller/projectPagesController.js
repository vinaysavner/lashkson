
module.exports = {
    distilation:(req,res,next)=>{
         res.render("pages/projects/distilation", { title: "Express" });
     },
     tanks:(req,res,next)=>{
        res.render("pages/projects/tanks", { title: "Express" });
    },
    molasses_tank:(req,res,next)=>{
        res.render("pages/projects/molasses_tank", { title: "Express" });
    },
    evaporation_plant:(req,res,next)=>{
        res.render("pages/projects/evaporation_plant", { title: "Express" });
    },
    evaporation_project:(req,res,next)=>{
        res.render("pages/projects/evaporation_project", { title: "Express" });
    },
   project_photo:(req,res,next)=>{
        res.render("pages/projects/project_photo", { title: "Express" });
    },

 }