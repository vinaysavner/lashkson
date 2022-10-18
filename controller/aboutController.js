const {About} = require("../model/services")

module.exports = {
    About:(req,res,next)=>{
        About((err, results) => {
     
            if (err) {
              console.log(err);
              // res.send(err.message)
      
              return;
            }
            console.log("resssssss=>>>>>",results);
            // var imgsrc = 'process.env.baseUrl' + req.file.baseUrl
            res.render("pages/frontend/about", { title: "Express", data: results ,active_nav: "about"});
          });
        }
    }