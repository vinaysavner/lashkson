const { HomeBanner } = require("../model/services")
const { CreateSection2 } = require("../model/services")
const { Section2 } = require("../model/services")
const { Mission } = require("../model/services")
const { recent_projects } = require("../model/services")

module.exports = {

  Home: (req, res, next) => {
    HomeBanner((err, banner) => {
      console.log(banner);
      if (err) {
        // console.log(err);
        return;
      }
      Mission((err, mission) => {
        console.log(mission);
        if (err) {
          // console.log(err);
          return;
        }

        Section2((err, results) => {
          console.log(results);
          if (err) {
            // console.log(err);
            return;
          }
          recent_projects((err, recent_projects) => {
            console.log("rpppppp", recent_projects)

            if (err) {
              console.log(err);
              // res.send(err.message)

              return;
            }
            res.render("pages/frontend/home", { title: "Express", banner: banner, mission: mission, data: results, recent_projects: recent_projects, active_nav: "home" });
          });
        });
      });
    });
  },
  ContactUs: (req, res, next) => {
    res.render("pages/frontend/contact", { title: "Express" })
  },



  CreateSection2: (req, res, next) => {
    CreateSection2(req.body, (err, results) => {

      if (err) {
        console.log(err);
        // res.send(err.message)

        return;
      }
      console.log("resssssss=>>>>>", results);
      // var imgsrc = 'process.env.baseUrl' + req.file.baseUrl
      res.render("pages/backend/home", { title: "Express", data: results });
    });
  },

  CreateMission: (req, res, next) => {
    CreateMission(req.body, (err, results) => {

      if (err) {
        console.log(err);
        // res.send(err.message)

        return;
      }
      console.log("resssssss=>>>>>", results);
      // var imgsrc = 'process.env.baseUrl' + req.file.baseUrl
      res.render("pages/backend/home", { title: "Express", data: results });
    });
  },





}