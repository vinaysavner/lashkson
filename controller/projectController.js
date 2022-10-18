const {AllProjects} = require("../model/services")
const {Project_details} = require("../model/services")

module.exports = {
   AllProjects:(req,res,next)=>{
    AllProjects((err, results) => {
    console.log("ppppppppppp",results)
        if (err) {
          console.log(err);
          // res.send(err.message)
  
          return;
        }
        console.log("resssssss=>>>>>",results);
        // var imgsrc = 'process.env.baseUrl' + req.file.baseUrl
        res.render("pages/frontend/projects", { title: "Express", data: results ,active_nav: "projects"});
      });
      
    },
    Project_details:(req,res,next)=>{
        Project_details(req,(err, results) => {
         
            if (err) {
              console.log(err);
              // res.send(err.message)
      
              return;
            }
            console.log("resssssss=>>>>>",results);
            // var imgsrc = 'process.env.baseUrl' + req.file.baseUrl
            res.render("pages/frontend/project_detail", { title: "Express", data: results });
          });
          
        },
}