const {recent_projects} = require("../model/services")
const {recent_project_details} = require("../model/services")

module.exports = {
   recent_projects:(req,res,next)=>{
    recent_projects((err, results) => {
      console.log("rpppppp",results)
     
        if (err) {
          console.log(err);
          // res.send(err.message)
  
          return;
        }
        console.log("resssssss=>>>>>",results);
        // var imgsrc = 'process.env.baseUrl' + req.file.baseUrl
        res.render("pages/frontend/home", { title: "Express", data: results});
      });
      
    },
    recent_project_details:(req,res,next)=>{
      recent_project_details(req,(err, results) => {
       
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