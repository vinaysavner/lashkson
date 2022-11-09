const pool = require("../config/database")
const { HomeBanner } = require("../model/services")
const { About } = require("../model/services")
const { AllProjects } = require("../model/services")
const { updateSection2 } = require("../model/services")
const { updateMission } = require("../model/services")
const { Mission } = require("../model/services")
const { Section2 } = require("../model/services")
const { recent_projects } = require("../model/services")
const { deleteRecentProjects } = require("../model/services")
const { deleteBanner } = require("../model/services")

const { Testimonial } = require("../model/services")
const { deleteTestimonial } = require("../model/services")
const { AllPaintingProjects } = require("../model/services")
const { delete_painting_project } = require("../model/services")
const { AllFabricationProjects } = require("../model/services")
const { delete_fabrication_project } = require("../model/services")
const { AllDemolitionProjects } = require("../model/services")
const { delete_demolition_project } = require("../model/services")
const { AllErectionProjects } = require("../model/services")
const { delete_erection_project } = require("../model/services")
const { AllCoatingProjects } = require("../model/services")
const { delete_coating_project } = require("../model/services")
const { AllInsulationProjects } = require("../model/services")
const { delete_insulation_project } = require("../model/services")
const { AllFrpProjects } = require("../model/services")
const { delete_frp_project } = require("../model/services")
const { AllmanpowerProjects } = require("../model/services")
const { delete_manpower_project } = require("../model/services")
const { deleteAboutBanner } = require("../model/services")

module.exports = {

  Dashboard: (req, res, next) => {
    HomeBanner((err, homebanner) => {
      console.log("home", homebanner)
      if (err) {
        // console.log(err);
        return;
      }
      Mission((err, mission) => {
        // console.log(mission);
        if (err) {
          // console.log(err);
          return;
        }
        Section2((err, Section2) => {
          if (err) {
            // console.log(err);
            return;
          }
          recent_projects((err, results) => {
            //  console.log("recent_projectssssss", results)
            if (err) {
              console.log(err);
              // res.send(err.message)

              return;
            }


            res.render("pages/backend/home", { title: "Express", homebanner: homebanner, mission: mission, Section2: Section2, data: results, });
          });
        });
      });
    });






  },
  About_us: (req, res, next) => {
    About((err, results) => {

      if (err) {
        console.log(err);
        // res.send(err.message)

        return;
      }

      Testimonial((err, testimonial) => {
        console.log(results);
        if (err) {
          // console.log(err);
          return;
        }

        console.log("resssssss=>>>>>", results);
        // var imgsrc = 'process.env.baseUrl' + req.file.baseUrl
        res.render("pages/backend/about", { title: "Express", data: results, testimonial: testimonial });
      });
    });

  },

  AllProjects: (req, res, next) => {
    AllProjects((err, results) => {
      console.log("ppppppppret4etppp", results)
      if (err) {
        console.log(err);
        // res.send(err.message)

        return;
      }
      console.log("resssssss=>>>>>", results);
      // var imgsrc = 'process.env.baseUrl' + req.file.baseUrl
      res.render("pages/backend/projects", { title: "Express", data: results });
    });

  },


  deleteRecentProjects: (req, res, next) => {
    deleteRecentProjects(req, (err, results) => {
      // console.log(results);
      if (err) {
        // console.log(err);
        return;
      }
      res.redirect('/admin/dashboard/')
      next();

    });
  },

  deleteAboutBanner: (req, res, next) => {
    deleteAboutBanner(req, (err, results) => {
      // console.log(results);
      if (err) {
        // console.log(err);
        return;
      }
      res.redirect('/admin/dashboard/')
      next();

    });
  },
  //banner
  banner: function (req, res) {
    console.log("resssssss=>", res);
    message = '';
    if (req.method == "POST") {
      var post = req.body;

      if (!req.files)
        return res.status(400).send('No files were uploaded.');
      var file = req.files.uploaded_image;
      var img_name = file.name;
      if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {

        file.mv('public/images/upload_banner_images/' + file.name, function (err) {

          if (err)
            return res.status(500).send(err);
          var sql = "INSERT INTO `banner`(image) VALUES ('" + img_name + "')";
          var query = pool.query(sql, function (err, result) {
            res.redirect('profile/' + result.insertId);
          });
        });
      } else {
        message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
        res.render('pages/backend/home', { message: message });
      }
    } else {
      res.render('pages/backend/home');
    }
  },
  deleteBanner: (req, res, next) => {
    deleteBanner(req, (err, homebanner) => {
      // console.log(results);
      if (err) {
        // console.log(err);
        return;
      }
      res.redirect('/admin/dashboard/')
      next();
    });
  },
  Homebanner: (req, res) => {
    console.log("resssssss=>", res);
    var message = '';
    // var id = req.params.id;
    var sql = "SELECT * FROM `banner` LIMIT 1";
    pool.query(sql, function (err, result) {
      console.log("homebanner>", result);
      if (result.length <= 0)
        message = "Profile not found!";
      res.redirect('/admin/dashboard')
      // res.render('pages/backend/home',{data:result, message: message});
    });

  },

  //testimonials
  //banner

  Testimonial: function (req, res) {
    console.log("resssssss=>", res);
    message = '';
    if (req.method == "POST") {
      var post = req.body;
      var client_name = post.client_name;
      var feedback = post.feedback;
      if (!req.files)
        return res.status(400).send('No files were uploaded.');
      var file = req.files.uploaded_image;
      var img_name = file.name;

      if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {

        file.mv('public/images/upload_Testimonial_images/' + file.name, function (err) {

          if (err)
            return res.status(500).send(err);
          var sql = "INSERT INTO `testimonials`(image,client_name,feedback) VALUES ('" + img_name + "','" + client_name + "','" + feedback + "')";
          var query = pool.query(sql, function (err, result) {
            res.redirect('profile/' + result.insertId);
          });
        });
      } else {
        message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
        res.render('pages/backend/about', { message: message });
      }
    } else {
      res.render('pages/backend/about');
    }
  },
  getTestimonial: function (req, res) {
    var message = '';
    // var id = req.params.id;
    var sql = "SELECT * FROM `testimonials`";
    pool.query(sql, function (err, result) {
      if (result.length <= 0)
        message = "Profile not found!";

      res.render('pages/backend/about', { data: result, message: message });
    });
  },
  deleteTestimonial: (req, res, next) => {
    deleteTestimonial(req, (err, deleteTestimonial) => {
      // console.log(results);
      if (err) {
        // console.log(err);
        return;
      }
      res.redirect('/about_us/')
      next();
    });
  },



  //projects

  projects: function (req, res) {
    message = '';
    if (req.method == "POST") {
      var post = req.body;
      var title = post.title;

      if (!req.files)
        return res.status(400).send('No files were uploaded.');
      var file = req.files.upload_image;
      var img_name = file.name;
      if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {

        file.mv('public/images/upload_project_images/' + file.name, function (err) {

          if (err)
            return res.status(500).send(err);
          var sql = "INSERT INTO `projects`(`image`,`title`) VALUES ('" + img_name + "','" + title + "')";
          var query = pool.query(sql, function (err, result) {
            res.redirect('profile/' + result.insertId);
          });
        });
      } else {
        message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
        res.render('pages/backend/project', { message: message });
      }
    } else {
      res.render('pages/backend/project');
    }
  },
  getProjects: function (req, res) {
    var message = '';
    // var id = req.params.id;
    var sql = "SELECT * FROM `projects`";
    pool.query(sql, function (err, result) {
      if (result.length <= 0)
        message = "Profile not found!";

      res.render('pages/backend/project', { data: result, message: message });
    });
  },

  aboutUs: function (req, res) {
    message = '';
    if (req.method == "POST") {
     
   
      var post = req.body;
      console.log('abouttttttttttttttttttttttttttt',req.files);

      var title = post.title;
      var founder = post.founder;

      if (!req.files)
        return res.status(400).send('No files were uploaded.');
      var file = req.files.uploaded;
      var img_name = file.name;
      if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {

        file.mv('public/images/upload_about_images/' + file.name, function (err) {

          if (err)
            return res.status(500).send(err);
          var sql = "INSERT INTO `about`(`image`,`title`,`founder`) VALUES ('" + img_name + "','" + title + "','" + founder + "')";
          var query = pool.query(sql, function (err, result) {
            res.redirect('profile/' + result.insertId);
          });
        });
      } else {
        message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
        res.render('pages/backend/about', { message: message });
      }
    } else {
      res.render('pages/backend/about');
    }
  },

  //About Us
  // aboutUs: function (req, res) {
  //   message = '';
  //   if (req.method == "POST") {
  //     var post = req.body;
  //     var title = post.title;
  //     var founder = post.founder;


  //     if (!req.files)
  //       return res.status(400).send('No files were uploaded.');
  //     var file = req.files.uploaded;
  //     var img_name = file.name;
  //     if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {

  //       file.mv('public/images/upload_about_images/' + file.name, function (err) {

  //         if (err)
  //           return res.status(500).send(err);
  //         var sql = "INSERT INTO `about`(`image`,`title`,`founder`) VALUES ('" + img_name + "','" + title + "','" + founder + "')";
  //         var query = pool.query(sql, function (err, result) {
  //           res.redirect('profile/' + result.insertId);
  //         });
  //       });
  //     } else {
  //       message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
  //       res.render('pages/backend/about', { message: message });
  //     }
  //   } else {
  //     res.render('pages/backend/about');
  //   }
  // },
  getAboutus: function (req, res) {
    var message = '';
    var id = req.params.id;
    var sql = "SELECT * FROM `about` WHERE `id`='" + id + "'";
    pool.query(sql, function (err, result) {
      if (result.length <= 0)
        message = "Profile not found!";

      res.render('pages/backend/about', { data: result, message: message });
    });
  },

  //contact us
  updateSection2: function (req, res) {
    updateSection2(req.body, (err, results) => {

      if (err) {
        console.log(err);
        // res.send(err.message)

        return;
      }
      console.log("resssssss=>>>>>", results);
      // var imgsrc = 'process.env.baseUrl' + req.file.baseUrl
      res.redirect('/admin/dashboard')

    });
  },

  updateMission: function (req, res) {
    updateMission(req.body, (err, results) => {

      if (err) {
        console.log(err);
        // res.send(err.message)

        return;
      }
      console.log("resssssss=>>>>>", results);
      // var imgsrc = 'process.env.baseUrl' + req.file.baseUrl
      res.redirect('/admin/dashboard')

    });
  },


  // Recent Projects

  Projects: function (req, res) {
    console.log("resssssss=>", res);
    message = '';
    if (req.method == "POST") {
      var post = req.body;
      var title = post.title;

      if (!req.files)
        return res.status(400).send('No files were uploaded.');
      var file = req.files.upload_recent_project_images;
      var img_name = file.name;
      if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {

        file.mv('public/images/upload_recent_project_images/' + file.name, function (err) {

          if (err)
            return res.status(500).send(err);
          var sql = "INSERT INTO `recent_project`(`image`,`title`) VALUES ('" + img_name + "','" + title + "')";
          var query = pool.query(sql, function (err, result) {
            res.redirect('profile/' + result.insertId);
          });
        });
      } else {
        message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
        res.render('pages/backend/home', { message: message });
      }
    } else {
      res.render('pages/backend/home');
    }
  },
  getRecentProject: function (req, res) {
    var message = '';
    var id = req.params.id;
    var sql = "SELECT * FROM `recent_project` WHERE `id`='" + id + "'";
    pool.query(sql, function (err, result) {
      if (result.length <= 0)
        message = "Profile not found!";

      res.render('pages/backend/home', { data: result, message: message });
    });
  },

 
  Project: (req, res, next) => {
    AllPaintingProjects((err, painting) => {
      console.log("ppppppppret4etppp", painting)
      if (err) {
        console.log(err);
        // res.send(err.message)

        return;
      }
      AllFabricationProjects((err, fabrication) => {
        console.log("ppppppppret4etppp", fabrication)
        if (err) {
          console.log(err);
          // res.send(err.message)

          return;
        }
        AllDemolitionProjects((err, demolition) => {
          console.log("ppppppppret4etppp", demolition)
          if (err) {
            console.log(err);
            // res.send(err.message)

            return;
          }
          AllErectionProjects((err, erection) => {
            console.log("ppppppppret4etppp", erection)
            if (err) {
              console.log(err);
              // res.send(err.message)

              return;
            }
            AllCoatingProjects((err, coating) => {
              console.log("ppppppppret4etppp", coating)
              if (err) {
                console.log(err);
                // res.send(err.message)

                return;
              }
              AllInsulationProjects((err, insulation) => {
                console.log("ppppppppret4etppp", insulation)
                if (err) {
                  console.log(err);
                  // res.send(err.message)

                  return;
                }
                AllFrpProjects((err, frp) => {
                  console.log("ppppppppret4etppp", frp)
                  if (err) {
                    console.log(err);
                    // res.send(err.message)

                    return;
                  }
                  AllmanpowerProjects((err, manpower) => {
                    console.log("ppppppppret4etppp", manpower)
                    if (err) {
                      console.log(err);
                      // res.send(err.message)

                      return;
                    }
                    res.render("pages/backend/project",{ title: "Express", painting: painting, fabrication: fabrication, demolition: demolition, erection: erection, coating: coating, insulation: insulation, frp: frp, manpower: manpower, active_nav: "home" });
                  });
                });
              });
            });
          });
        });
      });
    });
  },
   // painting projects

   PaintingProjects: function (req, res) {
    message = '';
    if (req.method == "POST") {
      var post = req.body;
      var title = post.title;
      var description = post.description;

      if (!req.files)
        return res.status(400).send('No files were uploaded.');
      var file = req.files.upload_painting_image;
      var img_name = file.name;
      if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {

        file.mv('public/images/upload_painting_images/' + file.name, function (err) {

          if (err)
            return res.status(500).send(err);
          var sql = "INSERT INTO `painting_projects`(`image`,`title`,`description`) VALUES ('" + img_name + "','" + title + "','" + description + "')";
          var query = pool.query(sql, function (err, result) {
            res.redirect('profile/' + result.insertId);
          });
        });
      } else {
        message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
        res.render('pages/backend/project', { message: message });
      }
    } else {
      res.render('pages/backend/project');
    }
  },
  getPaintingProjects: function (req, res) {
    var message = '';
    // var id = req.params.id;
    var sql = "SELECT * FROM `painting_projects`";
    pool.query(sql, function (err, result) {
      if (result.length <= 0)
        message = "Profile not found!";

      res.render('pages/backend/project', { data: result, message: message });
    });
  },
  AllPaintingProjects: (req, res, next) => {
    AllPaintingProjects((err, results) => {
      console.log("ppppppppret4etppp", results)
      if (err) {
        console.log(err);
        // res.send(err.message)

        return;
      }
      console.log("resssssss=>>>>>", results);
      // var imgsrc = 'process.env.baseUrl' + req.file.baseUrl
      res.render("pages/backend/project", { title: "Express", data: results });
    });

  },
  delete_painting_project: (req, res, next) => {
    delete_painting_project(req, (err, painting) => {
      // console.log(results);
      if (err) {
        // console.log(err);
        return;
      }
      res.render("pages/backend/project");
    });
  },



  // fabrication projects

  FabricationProjects: function (req, res) {
    message = '';
    if (req.method == "POST") {
      var post = req.body;
      var title = post.title;
      var description = post.description;

      if (!req.files)
        return res.status(400).send('No files were uploaded.');
      var file = req.files.upload_fabrication_image;
      var img_name = file.name;
      if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {

        file.mv('public/images/upload_fabrication_images/' + file.name, function (err) {

          if (err)
            return res.status(500).send(err);
          var sql = "INSERT INTO `fabrication_projects`(`image`,`title`,`description`) VALUES ('" + img_name + "','" + title + "','" + description + "')";
          var query = pool.query(sql, function (err, result) {
            res.redirect('profile/' + result.insertId);
          });
        });
      } else {
        message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
        res.render('pages/backend/project', { message: message });
      }
    } else {
      res.render('pages/backend/project');
    }
  },
  getfabricationProjects: function (req, res) {
    var message = '';
    // var id = req.params.id;
    var sql = "SELECT * FROM `fabrication_projects`";
    pool.query(sql, function (err, result) {
      if (result.length <= 0)
        message = "Profile not found!";

      res.render('pages/backend/project', { data: result, message: message });
    });
  },
  AllFabricationProjects: (req, res, next) => {
    AllFabricationProjects((err, results) => {
      console.log("ppppppppret4etppp", results)
      if (err) {
        console.log(err);
        // res.send(err.message)

        return;
      }
      console.log("resssssss=>>>>>", results);
      // var imgsrc = 'process.env.baseUrl' + req.file.baseUrl
      res.render("pages/backend/project", { title: "Express", data: results });
    });

  },

  delete_fabrication_project: (req, res, next) => {
    delete_fabrication_project(req, (err, fabrication) => {
      // console.log(results);
      if (err) {
        // console.log(err);
        return;
      }
      res.redirect("/project/")
    });
  },

  //Demolition Project

  DemolitionProjects: function (req, res) {
    message = '';
    if (req.method == "POST") {
      var post = req.body;
      var title = post.title;
      var description = post.description;

      if (!req.files)
        return res.status(400).send('No files were uploaded.');
      var file = req.files.upload_demolition_image;
      var img_name = file.name;
      if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {

        file.mv('public/images/upload_demolition_images/' + file.name, function (err) {

          if (err)
            return res.status(500).send(err);
          var sql = "INSERT INTO `demolition_projects`(`image`,`title`,`description`) VALUES ('" + img_name + "','" + title + "','" + description + "')";
          var query = pool.query(sql, function (err, result) {
            res.redirect('profile/' + result.insertId);
          });
        });
      } else {
        message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
        res.render('pages/backend/project', { message: message });
      }
    } else {
      res.render('pages/backend/project');
    }
  },
  getdemolitionProjects: function (req, res) {
    var message = '';
    // var id = req.params.id;
    var sql = "SELECT * FROM `demolition_projects`";
    pool.query(sql, function (err, result) {
      if (result.length <= 0)
        message = "Profile not found!";

      res.render('pages/backend/project', { data: result, message: message });
    });
  },
  AllDemolitionProjects: (req, res, next) => {
    AllDemolitionProjects((err, results) => {
      console.log("ppppppppret4etppp", results)
      if (err) {
        console.log(err);
        // res.send(err.message)

        return;
      }
      console.log("resssssss=>>>>>", results);
      // var imgsrc = 'process.env.baseUrl' + req.file.baseUrl
      res.render("pages/backend/project", { title: "Express", data: results });
    });

  },

  delete_demolition_project: (req, res, next) => {
    delete_demolition_project(req, (err, demolition) => {
      // console.log(results);
      if (err) {
        // console.log(err);
        return;
      }
      res.redirect("/project/")
    });
  },



  //Erection Project

  ErectionProjects: function (req, res) {
    message = '';
    if (req.method == "POST") {
      var post = req.body;
      var title = post.title;
      var description = post.description;

      if (!req.files)
        return res.status(400).send('No files were uploaded.');
      var file = req.files.upload_erection_image;
      var img_name = file.name;
      if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {

        file.mv('public/images/upload_erection_images/' + file.name, function (err) {

          if (err)
            return res.status(500).send(err);
          var sql = "INSERT INTO `erection_projects`(`image`,`title`,`description`) VALUES ('" + img_name + "','" + title + "','" + description + "')";
          var query = pool.query(sql, function (err, result) {
            res.redirect('profile/' + result.insertId);
          });
        });
      } else {
        message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
        res.render('pages/backend/project', { message: message });
      }
    } else {
      res.render('pages/backend/project');
    }
  },
  geterectionProjects: function (req, res) {
    var message = '';
    // var id = req.params.id;
    var sql = "SELECT * FROM `erection_projects`";
    pool.query(sql, function (err, result) {
      if (result.length <= 0)
        message = "Profile not found!";

      res.render('pages/backend/project', { data: result, message: message });
    });
  },
  AllErectionProjects: (req, res, next) => {
    AllErectionProjects((err, results) => {
      console.log("ppppppppret4etppp", results)
      if (err) {
        console.log(err);
        // res.send(err.message)

        return;
      }
      console.log("resssssss=>>>>>", results);
      // var imgsrc = 'process.env.baseUrl' + req.file.baseUrl
      res.render("pages/backend/project", { title: "Express", data: results });
    });

  },

  delete_erection_project: (req, res, next) => {
    delete_erection_project(req, (err, erection) => {
      // console.log(results);
      if (err) {
        // console.log(err);
        return;
      }
      res.redirect("/project/")
    });
  },

  //Coating Project

  CoatingProjects: function (req, res) {
    message = '';
    if (req.method == "POST") {
      var post = req.body;
      var title = post.title;
      var description = post.description;

      if (!req.files)
        return res.status(400).send('No files were uploaded.');
      var file = req.files.upload_coating_image;
      var img_name = file.name;
      if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {

        file.mv('public/images/upload_coating_images/' + file.name, function (err) {

          if (err)
            return res.status(500).send(err);
          var sql = "INSERT INTO `coating_projects`(`image`,`title`,`description`) VALUES ('" + img_name + "','" + title + "','" + description + "')";
          var query = pool.query(sql, function (err, result) {
            res.redirect('profile/' + result.insertId);
          });
        });
      } else {
        message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
        res.render('pages/backend/project', { message: message });
      }
    } else {
      res.render('pages/backend/project');
    }
  },
  getcoatingProjects: function (req, res) {
    var message = '';
    // var id = req.params.id;
    var sql = "SELECT * FROM `coating_projects`";
    pool.query(sql, function (err, result) {
      if (result.length <= 0)
        message = "Profile not found!";

      res.render('pages/backend/project', { data: result, message: message });
    });
  },
  AllCoatingProjects: (req, res, next) => {
    AllCoatingProjects((err, results) => {
      console.log("ppppppppret4etppp", results)
      if (err) {
        console.log(err);
        // res.send(err.message)

        return;
      }
      console.log("resssssss=>>>>>", results);
      // var imgsrc = 'process.env.baseUrl' + req.file.baseUrl
      res.render("pages/backend/project", { title: "Express", data: results });
    });

  },

  delete_coating_project: (req, res, next) => {
    delete_coating_project(req, (err, coating) => {
      // console.log(results);
      if (err) {
        // console.log(err);
        return;
      }
      res.redirect("/project/")
    });
  },



  // insulation projects

  InsulationProjects: function (req, res) {
    message = '';
    if (req.method == "POST") {
      var post = req.body;
      var title = post.title;
      var description = post.description;

      if (!req.files)
        return res.status(400).send('No files were uploaded.');
      var file = req.files.upload_insulation_image;
      var img_name = file.name;
      if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {

        file.mv('public/images/upload_insulation_images/' + file.name, function (err) {

          if (err)
            return res.status(500).send(err);
          var sql = "INSERT INTO `insulation_projects`(`image`,`title`,`description`) VALUES ('" + img_name + "','" + title + "','" + description + "')";
          var query = pool.query(sql, function (err, result) {
            res.redirect('profile/' + result.insertId);
          });
        });
      } else {
        message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
        res.render('pages/backend/project', { message: message });
      }
    } else {
      res.render('pages/backend/project');
    }
  },
  getinsulationProjects: function (req, res) {
    var message = '';
    // var id = req.params.id;
    var sql = "SELECT * FROM `insulation_projects`";
    pool.query(sql, function (err, result) {
      if (result.length <= 0)
        message = "Profile not found!";

      res.render('pages/backend/project', { data: result, message: message });
    });
  },
  AllInsulationProjects: (req, res, next) => {
    AllInsulationProjects((err, results) => {
      console.log("ppppppppret4etppp", results)
      if (err) {
        console.log(err);
        // res.send(err.message)

        return;
      }
      console.log("resssssss=>>>>>", results);
      // var imgsrc = 'process.env.baseUrl' + req.file.baseUrl
      res.render("pages/backend/project", { title: "Express", data: results });
    });

  },

  delete_insulation_project: (req, res, next) => {
    delete_insulation_project(req, (err, insulation) => {
      // console.log(results);
      if (err) {
        // console.log(err);
        return;
      }
      res.redirect("/project/")
    });
  },


  // FRP projects

  FrpProjects: function (req, res) {
    message = '';
    if (req.method == "POST") {
      var post = req.body;
      var title = post.title;
      var description = post.description;

      if (!req.files)
        return res.status(400).send('No files were uploaded.');
      var file = req.files.upload_frp_image;
      var img_name = file.name;
      if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {

        file.mv('public/images/upload_frp_images/' + file.name, function (err) {

          if (err)
            return res.status(500).send(err);
          var sql = "INSERT INTO `frp_projects`(`image`,`title`,`description`) VALUES ('" + img_name + "','" + title + "','" + description + "')";
          var query = pool.query(sql, function (err, result) {
            res.redirect('profile/' + result.insertId);
          });
        });
      } else {
        message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
        res.render('pages/backend/project', { message: message });
      }
    } else {
      res.render('pages/backend/project');
    }
  },
  getfrpProjects: function (req, res) {
    var message = '';
    // var id = req.params.id;
    var sql = "SELECT * FROM `frp_projects`";
    pool.query(sql, function (err, result) {
      if (result.length <= 0)
        message = "Profile not found!";

      res.render('pages/backend/project', { data: result, message: message });
    });
  },
  AllFrpProjects: (req, res, next) => {
    AllFrpProjects((err, results) => {
      console.log("ppppppppret4etppp", results)
      if (err) {
        console.log(err);
        // res.send(err.message)

        return;
      }
      console.log("resssssss=>>>>>", results);
      // var imgsrc = 'process.env.baseUrl' + req.file.baseUrl
      res.render("pages/backend/project", { title: "Express", data: results });
    });

  },

  delete_frp_project: (req, res, next) => {
    delete_frp_project(req, (err, frp) => {
      // console.log(results);
      if (err) {
        // console.log(err);
        return;
      }
      res.redirect("/project/")
    });
  },


  // Manpower Services projects

  ManpowerProjects: function (req, res) {
    message = '';
    if (req.method == "POST") {
      var post = req.body;
      var title = post.title;
      var description = post.description;

      if (!req.files)
        return res.status(400).send('No files were uploaded.');
      var file = req.files.upload_manpower_image;
      var img_name = file.name;
      if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {

        file.mv('public/images/upload_manpower_images/' + file.name, function (err) {

          if (err)
            return res.status(500).send(err);
          var sql = "INSERT INTO `manpower_projects`(`image`,`title`,`description`) VALUES ('" + img_name + "','" + title + "','" + description + "')";
          var query = pool.query(sql, function (err, result) {
            res.redirect('profile/' + result.insertId);
          });
        });
      } else {
        message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
        res.render('pages/backend/project', { message: message });
      }
    } else {
      res.render('pages/backend/project');
    }
  },
  getmanpowerProjects: function (req, res) {
    var message = '';
    // var id = req.params.id;
    var sql = "SELECT * FROM `manpower_projects`";
    pool.query(sql, function (err, result) {
      if (result.length <= 0)
        message = "Profile not found!";

      res.render('pages/backend/project', { data: result, message: message });
    });
  },
  AllmanpowerProjects: (req, res, next) => {
    AllmanpowerProjects((err, results) => {
      console.log("ppppppppret4etppp", results)
      if (err) {
        console.log(err);
        // res.send(err.message)

        return;
      }
      console.log("resssssss=>>>>>", results);
      // var imgsrc = 'process.env.baseUrl' + req.file.baseUrl
      res.render("pages/backend/project", { title: "Express", data: results });
    });

  },

  delete_manpower_project: (req, res, next) => {
    delete_manpower_project(req, (err, manpower) => {
      // console.log(results);
      if (err) {
        // console.log(err);
        return;
      }
      res.redirect("/project/")
    });
  },

}


