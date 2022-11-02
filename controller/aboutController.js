const {About} = require("../model/services");
const { Testimonial } = require("../model/services");

module.exports = {
    About:(req,res,next)=>{
        About((err, results) => {
     
            if (err) {
              console.log(err);
              // res.send(err.message)
      
              return;
            }
       
            Testimonial( (err,Testimonial) => {
              console.log(results);
              if (err) {
                // console.log(err);
                return;
              }  
            console.log("resssssss=>>>>>",results);
            // var imgsrc = 'process.env.baseUrl' + req.file.baseUrl
            res.render("pages/frontend/about", { title: "Express", data: results ,Testimonial : Testimonial ,active_nav: "about"});
          });
        });
    
        },
          
      //   Testimonial: (req, res, next) => {
      //     Testimonial(req.body, (err, results) => {
     
      //      if (err) {
      //        console.log(err);
      //        // res.send(err.message)
     
      //        return;
      //      }
      //      console.log("resssssss=>>>>>", results);
      //      // var imgsrc = 'process.env.baseUrl' + req.file.baseUrl
      //      res.render("pages/backend/about", { title: "Express", data: results });
      //    });
      //  },

     
        
        }