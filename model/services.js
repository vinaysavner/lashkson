const pool = require('../config/database')
module.exports = {
  login: (email, callback) => {
    // // console.log(data.email);
    pool.query(
      `Select * from register where email = ?`,
      [email],(error, results, fields) => {
        if (error) {
          // res.send(error.message)
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  deleteBanner: (req, callback) => {
    pool.query(
      `delete from banner where id =?`,
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results);
      }
    );
  },
  deleteAboutBanner: (req, callback) => {
    pool.query(
      `delete from about where id =?`,
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results);
      }
    );
  },
  deleteTestimonial: (req, callback) => {
    pool.query(
      `delete from testimonials where id =?`,
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results);
      }
    );
  },

    HomeBanner: (callback) => {
        pool.query(
          `Select * from banner`,
        
    
          (error, results, fields) => {
            console.log("image",results);
       
            if (error) {
              return callback(error);
            }
            return callback(null, results);
          }
        );
      },
     
       Section2: (callback) => {
        pool.query(
          `Select * from section2`,
       
         
          (error, results, fields) => {
           
            console.log("Section2",results);
            if (error) {
              return callback(error);
            }
            return callback(null, results);
          }
        );
      },
      updateSection2: (data,callback) => {
        // console.log("data===",data);
        pool.query(
          "UPDATE section2 SET title = ?,description = ? ,title1 = ?,description1 = ?,title2 = ?,description2 = ?",
          [data.title, data.description,data.title1, data.description1,data.title2, data.description2],
          (error, results, fields) => {
            if (error) {
              return callback(error);
            }
            return callback(null, results);
          }
        )
      },
      CreateSection2: (data, callback) => {
        // console.log("data===",data);
        pool.query(
          `insert into section2(title,description) values(?,?)`,
          [data.title, data.description],
          (error, results, fields) => {
            if (error) {
              return callback(error);
            }
            return callback(null, results);
          }
        )
      },
 
   AllProjects: (callback) => {
        pool.query(
          `Select * from projects`,
    
          (error, results, fields) => {
            console.log("projects",results);
       
            if (error) {
              return callback(error);
            }
            console.log("banghghnerResultdsgfgrer",results);
            return callback(null, results);
          }
        );
      },
      Testimonial: (callback) => {
        pool.query(
          `Select * from testimonials`,
    
          (error, results, fields) => {
            console.log("testimonials",results);
       
            if (error) {
              return callback(error);
            }
            console.log("banghghnerResultdsgfgrer",results);
            return callback(null, results);
          }
        );
      },
      recent_projects: (callback) => {
        pool.query(
          `Select * from recent_project`,
    
          (error, results, fields) => {
            console.log("projects",results);
       
            if (error) {
              return callback(error);
            }
           
            return callback(null, results);
          }
        );
      },
      deleteRecentProjects: (req, callback) => {
        pool.query(
          `delete from recent_project where id =?`,
          [req.params.id],
          (error, results, fields) => {
            if (error) {
              callback(error);
            }
            return callback(null, results);
          }
        );
      },
    
      recent_project_details: (req,callback) => {
        pool.query(
          `Select * from recent_project where id = ?`,
          [req.params.id],
    
          (error, results, fields) => {
            console.log("recent_project",results);
       
            if (error) {
              return callback(error);
            }
          
            return callback(null, results);
          }
        );
      },
      Project_details: (req,callback) => {
        pool.query(
          `Select * from projects where id = ?`,
          [req.params.id],
    
          (error, results, fields) => {
            console.log("projects",results);
       
            if (error) {
              return callback(error);
            }
     
            return callback(null, results);
          }
        );
      },
      About: (callback) => {
        pool.query(
          `Select * from about`,
    
          (error, results, fields) => {
            console.log("projects",results);
       
            if (error) {
              return callback(error);
            }
        
            return callback(null, results);
          }
        );
      },
      Mission: (callback) => {
        pool.query(
          `Select * from mission`,
    
          (error, results, fields) => {
            console.log("mission",results);
       
            if (error) {
              return callback(error);
            }
           
            return callback(null, results);
          }
        );
      },
      updateMission: (data, callback) => {
        // console.log("data===",data);
        pool.query(
          // `insert into mission(clients,members,experience,projects) values(?,?,?,?)`,
          "UPDATE mission SET experience= ?,work_facilities = ?,engineers = ?,projects=?",
          [data.experience, data.work_facilities, data.engineers, data.projects],
          (error, results, fields) => {
            if (error) {
              return callback(error);
            }
            return callback(null, results);
          }
        )
      },
       
   AllPaintingProjects: (callback) => {
    pool.query(
      `Select * from painting_projects`,

      (error, results, fields) => {
        console.log("projects",results);
   
        if (error) {
          return callback(error);
        }
        console.log("banghghnerResultdsgfgrer",results);
        return callback(null, results);
      }
    );
  },
  delete_painting_project: (req, callback) => {
    pool.query(
      `delete from painting_projects where id =?`,
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results);
      }
    );
  },
  painting: (callback) => {
    pool.query(
      `Select * from painting_projects`,
    

      (error, results, fields) => {
        console.log("image",results);
   
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  AllFabricationProjects: (callback) => {
    pool.query(
      `Select * from fabrication_projects`,

      (error, results, fields) => {
        console.log("projects",results);
   
        if (error) {
          return callback(error);
        }
        console.log("banghghnerResultdsgfgrer",results);
        return callback(null, results);
      }
    );
  },
  delete_fabrication_project: (req, callback) => {
    pool.query(
      `delete from fabrication_projects where id =?`,
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results);
      }
    );
  },
  fabrication: (callback) => {
    pool.query(
      `Select * from fabrication_projects`,
    

      (error, results, fields) => {
        console.log("image",results);
   
        if (error) {
          return callback(error);
        }
       
        return callback(null, results);
      }
    );
  },
  AllDemolitionProjects: (callback) => {
    pool.query(
      `Select * from demolition_projects`,

      (error, results, fields) => {
        console.log("projects",results);
   
        if (error) {
          return callback(error);
        }
        console.log("banghghnerResultdsgfgrer",results);
        return callback(null, results);
      }
    );
  },
  delete_demolition_project: (req, callback) => {
    pool.query(
      `delete from demolition_projects where id =?`,
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results);
      }
    );
  },
  demolition: (callback) => {
    pool.query(
      `Select * from demolition_projects`,
    

      (error, results, fields) => {
        console.log("image",results);
   
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  AllErectionProjects: (callback) => {
    pool.query(
      `Select * from erection_projects`,

      (error, results, fields) => {
        console.log("projects",results);
   
        if (error) {
          return callback(error);
        }
        console.log("banghghnerResultdsgfgrer",results);
        return callback(null, results);
      }
    );
  },
  delete_erection_project: (req, callback) => {
    pool.query(
      `delete from erection_projects where id =?`,
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results);
      }
    );
  },
 erections: (callback) => {
    pool.query(
      `Select * from erection_projects`,
    

      (error, results, fields) => {
        console.log("image",results);
   
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  AllCoatingProjects: (callback) => {
    pool.query(
      `Select * from coating_projects`,

      (error, results, fields) => {
        console.log("projects",results);
   
        if (error) {
          return callback(error);
        }
        console.log("banghghnerResultdsgfgrer",results);
        return callback(null, results);
      }
    );
  },
  delete_coating_project: (req, callback) => {
    pool.query(
      `delete from coating_projects where id =?`,
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results);
      }
    );
  },
  coatings: (callback) => {
    pool.query(
      `Select * from coating_projects`,
    

      (error, results, fields) => {
        console.log("image",results);
   
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  AllInsulationProjects: (callback) => {
    pool.query(
      `Select * from insulation_projects`,

      (error, results, fields) => {
        console.log("projects",results);
   
        if (error) {
          return callback(error);
        }
        console.log("banghghnerResultdsgfgrer",results);
        return callback(null, results);
      }
    );
  },
  delete_insulation_project: (req, callback) => {
    pool.query(
      `delete from insulation_projects where id =?`,
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results);
      }
    );
  },
  insulations: (callback) => {
    pool.query(
      `Select * from insulation_projects`,
    

      (error, results, fields) => {
        console.log("image",results);
   
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  AllFrpProjects: (callback) => {
    pool.query(
      `Select * from frp_projects`,

      (error, results, fields) => {
        console.log("projects",results);
   
        if (error) {
          return callback(error);
        }
        console.log("banghghnerResultdsgfgrer",results);
        return callback(null, results);
      }
    );
  },
  delete_frp_project: (req, callback) => {
    pool.query(
      `delete from frp_projects where id =?`,
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results);
      }
    );
  },
  frp: (callback) => {
    pool.query(
      `Select * from frp_projects`,
    

      (error, results, fields) => {
        console.log("image",results);
   
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  AllmanpowerProjects: (callback) => {
    pool.query(
      `Select * from manpower_projects`,

      (error, results, fields) => {
        console.log("projects",results);
   
        if (error) {
          return callback(error);
        }
        console.log("banghghnerResultdsgfgrer",results);
        return callback(null, results);
      }
    );
  },
  delete_manpower_project: (req, callback) => {
    pool.query(
      `delete from manpower_projects where id =?`,
      [req.params.id],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results);
      }
    );
  },
  manpower: (callback) => {
    pool.query(
      `Select * from manpower_projects`,
    

      (error, results, fields) => {
        console.log("image",results);
   
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
}