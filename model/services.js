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

    HomeBanner: (callback) => {
        pool.query(
          `Select * from banner`,
        
    
          (error, results, fields) => {
            console.log("image",results);
       
            if (error) {
              return callback(error);
            }
            console.log("banghghnerResult",results);
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
   
      updateSection2: (data, callback) => {
        // console.log("data===",data);
        pool.query(
        
          "UPDATE section2 SET title = ?,description = ?",
          [data.title, data.description],
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
      recent_projects: (callback) => {
        pool.query(
          `Select * from recent_project`,
    
          (error, results, fields) => {
            console.log("projects",results);
       
            if (error) {
              return callback(error);
            }
            console.log("banghghnerResult",results);
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
            console.log("banghghnerResult",results);
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
            console.log("banghghnerResult",results);
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
            console.log("banghghnerResult",results);
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
            console.log("banghghnerResult",results);
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
 
}