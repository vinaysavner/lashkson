const pool = require("../config/database")
const { HomeBanner } = require("../model/services")
const { About } = require("../model/services")
const { AllProjects } = require("../model/services")
const {updateSection2} = require("../model/services")
const {updateMission} = require("../model/services")
const {Mission} = require("../model/services")
const { Section2 } = require("../model/services")
const { recent_projects } = require("../model/services")
const {deleteRecentProjects} = require("../model/services")
const {deleteBanner} = require("../model/services")


module.exports = {

  Dashboard: (req,res,next) =>{ 
   HomeBanner((err,homebanner) => {
    console.log("home", homebanner)
    if (err) {
      // console.log(err);
      return;
    }
    Mission((err,mission) => {
      // console.log(mission);
      if (err) {
        // console.log(err);
        return;
      }
    Section2( (err, Section2) => {
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
     
       
      res.render("pages/backend/home", { title: "Express", homebanner: homebanner, mission:mission, Section2: Section2 ,data:results,});
    });
  });
  });
  });


 

    
  
    },
  About_us: (req,res,next) =>{
    About((err, results) => {
     
      if (err) {
        console.log(err);
        // res.send(err.message)

        return;
      }
      console.log("resssssss=>>>>>",results);
      // var imgsrc = 'process.env.baseUrl' + req.file.baseUrl
      res.render("pages/backend/about", { title: "Express", data: results });
    });
  
    },

    AllProjects: (req,res,next) =>{
      AllProjects((err, results) => {
        console.log("ppppppppret4etppp",results)
            if (err) {
              console.log(err);
              // res.send(err.message)
      
              return;
            }
            console.log("resssssss=>>>>>",results);
            // var imgsrc = 'process.env.baseUrl' + req.file.baseUrl
            res.render("pages/backend/projects", { title: "Express", data: results});
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
    //banner
  banner:function(req, res){
        console.log("resssssss=>",res);
        message = '';
       if(req.method == "POST"){
          var post  = req.body;
        
          if (!req.files)
                    return res.status(400).send('No files were uploaded.');
            var file = req.files.uploaded_image;
            var img_name=file.name;
             if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){
                                    
                  file.mv('public/images/upload_banner_images/'+file.name, function(err) {
                                
                      if (err)
                        return res.status(500).send(err);
                            var sql = "INSERT INTO `banner`(image) VALUES ('" +img_name+ "')";
                                var query = pool.query(sql, function(err, result) {
                                     res.redirect('profile/'+result.insertId);
                                });
                           });
              } else {
                message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
                res.render('pages/backend/home',{message: message});
              }
       } else {
          res.render('pages/backend/home');
       }
      },
      deleteBanner: (req, res, next) => {
        deleteBanner(req, (err,homebanner ) => {
          // console.log(results);
          if (err) {
            // console.log(err);
            return;
          }
        res.redirect('/admin/dashboard/')
        next();
        });
      },
  Homebanner:(req,res)=>{
        console.log("resssssss=>",res);
      var message = '';
      // var id = req.params.id;
      var sql="SELECT * FROM `banner` LIMIT 1"; 
      pool.query(sql, function(err, result){
        console.log("homebanner>",result);
        if(result.length <= 0)
        message = "Profile not found!";
        res.redirect('/admin/dashboard')
        // res.render('pages/backend/home',{data:result, message: message});
      });
      
    },

   //section 2
   
//projects

  projects :function(req, res){
    message = '';
   if(req.method == "POST"){
      var post  = req.body;
      var title= post.title;
     
      if (!req.files)
                return res.status(400).send('No files were uploaded.');
        var file = req.files.upload_image;
        var img_name=file.name;
         if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){
                                
              file.mv('public/images/upload_project_images/'+file.name, function(err) {
                            
                  if (err)
                    return res.status(500).send(err);
                        var sql = "INSERT INTO `projects`(`image`,`title`) VALUES ('" +img_name+ "','" +title+ "')";
                            var query = pool.query(sql, function(err, result) {
                                 res.redirect('profile/'+result.insertId);
                            });
                       });
          } else {
            message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
            res.render('pages/backend/project',{message: message});
          }
   } else {
      res.render('pages/backend/project');
   }
},
getProjects : function(req, res){
  var message = '';
  // var id = req.params.id;
  var sql="SELECT * FROM `projects`"; 
 pool.query(sql, function(err, result){
  if(result.length <= 0)
    message = "Profile not found!";
    
    res.render('pages/backend/project',{data:result, message: message});
 });
},


//About Us
aboutUs :function(req, res){
    message = '';
   if(req.method == "POST"){
      var post  = req.body;
      var title= post.title;
      var founder= post.description;
  
  
      if (!req.files)
                return res.status(400).send('No files were uploaded.');
        var file = req.files.uploaded;
        var img_name=file.name;
         if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){
                                
              file.mv('public/images/upload_about_images/'+file.name, function(err) {
                            
                  if (err)
                    return res.status(500).send(err);
                        var sql = "INSERT INTO `about`(`image`,`title`,`founder`) VALUES ('" +img_name+ "','" +title+ "','" +founder+ "')";
                            var query = pool.query(sql, function(err, result) {
                                 res.redirect('profile/'+result.insertId);
                            });
                       });
          } else {
            message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
            res.render('pages/backend/about',{message: message});
          }
   } else {
      res.render('pages/backend/about');
   }
  },
 getAboutus : function(req, res){
  var message = '';
  var id = req.params.id;
  var sql="SELECT * FROM `about` WHERE `id`='"+id+"'"; 
  pool.query(sql, function(err, result){
    if(result.length <= 0)
    message = "Profile not found!";
    
    res.render('pages/backend/about',{data:result, message: message});
  });
  },

  //contact us


updateSection2: function(req, res)  {
    updateSection2(req.body, (err, results)=> {
  
      if (err) {
        console.log(err);
        // res.send(err.message)
  
        return;
      }
      console.log("resssssss=>>>>>", results);
      // var imgsrc = 'process.env.baseUrl' + req.file.baseUrl
      res.redirect('/admin/dashboard')
      
    });
  }
  ,
  updateMission: function(req, res)  {
    updateMission(req.body, (err, results)=> {
  
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

  Projects:function(req, res){
    console.log("resssssss=>",res);
    message = '';
   if(req.method == "POST"){
      var post  = req.body;
      var title = post.title;
    
      if (!req.files)
                return res.status(400).send('No files were uploaded.');
        var file = req.files.upload_recent_project_images;
        var img_name=file.name;
         if(file.mimetype == "image/jpeg" ||file.mimetype == "image/png"||file.mimetype == "image/gif" ){
                                
              file.mv('public/images/upload_recent_project_images/'+file.name, function(err) {
                            
                  if (err)
                    return res.status(500).send(err);
                        var sql = "INSERT INTO `recent_project`(`image`,`title`) VALUES ('" +img_name+ "','" +title+ "')";
                            var query = pool.query(sql, function(err, result) {
                                 res.redirect('profile/'+result.insertId);
                            });
                       });
          } else {
            message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
            res.render('pages/backend/home',{message: message});
          }
   } else {
      res.render('pages/backend/home');
   }
  },
getRecentProject : function(req, res){
  var message = '';
  var id = req.params.id;
  var sql="SELECT * FROM `recent_project` WHERE `id`='"+id+"'"; 
 pool.query(sql, function(err, result){
  if(result.length <= 0)
    message = "Profile not found!";
    
    res.render('pages/backend/home',{data:result, message: message});
 });
},



}


