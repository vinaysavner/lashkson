
const {painting} = require("../model/services")
const {fabrication} = require("../model/services")
const {demolition} = require("../model/services")
const {erections} = require("../model/services")
const {coatings} = require("../model/services")
const {insulations} = require("../model/services")
const {frp} = require("../model/services")
const {manpower} = require("../model/services")
module.exports = {
    paintings:(req,res,next)=>{
        painting((err,results) => {
          var arrdata = [];
            const chunkSize = 3;
            for (let i = 0; i < results.length; i += chunkSize) {
                const chunk = results.slice(i, i + chunkSize);
                // arrdata[i] = Object.entries(chunk);
                arrdata.push(chunk);
              }
              console.log("chunk->>>>>>>>>>",arrdata);
            if (err) {
              // console.log(err);
              return;
            }
         res.render("pages/projects/paintings", { title: "Express",data:arrdata,active_nav: "home" });
        });
     },
     fabrications:(req,res,next)=>{
        fabrication((err,results) => {
          var arrdata = [];
          const chunkSize = 3;
          for (let i = 0; i < results.length; i += chunkSize) {
              const chunk = results.slice(i, i + chunkSize);
              // arrdata[i] = Object.entries(chunk);
              arrdata.push(chunk);
            }
            if (err) {
              // console.log(err);
              return;
            }
         res.render("pages/projects/fabrications", { title: "Express", data:arrdata ,active_nav: "home" });
        });
    },
    demolition_services:(req,res,next)=>{
        demolition((err,results) => {
          var arrdata = [];
          const chunkSize = 3;
          for (let i =   0; i < results.length; i += chunkSize) {
              const chunk = results.slice(i, i + chunkSize);
              // arrdata[i] = Object.entries(chunk);
              arrdata.push(chunk);
            }
       
            if (err) {
              // console.log(err);
              return;
            }
         res.render("pages/projects/demolition_services", { title: "Express", data:arrdata ,active_nav: "home" });
        });
    },
    erection:(req,res,next)=>{
       erections((err,results) => {
        var arrdata = [];
        const chunkSize = 3;
        for (let i = 0; i < results.length; i += chunkSize) {
            const chunk = results.slice(i, i + chunkSize);
            // arrdata[i] = Object.entries(chunk);
            arrdata.push(chunk);
          }
            console.log(results);
            if (err) {
              // console.log(err);
              return;
            }
         res.render("pages/projects/erection", { title: "Express", data:arrdata ,active_nav: "home" });
        });
    },
    insulation:(req,res,next)=>{
        insulations((err,results) => {
          var arrdata = [];
          const chunkSize = 3;
          for (let i = 0; i < results.length; i += chunkSize) {
              const chunk = results.slice(i, i + chunkSize);
              // arrdata[i] = Object.entries(chunk);
              arrdata.push(chunk);
            }
            console.log(results);
            if (err) {
              // console.log(err);
              return;
            }
         res.render("pages/projects/insulation", { title: "Express", data:arrdata ,active_nav: "home" });
        });
    },
   coating:(req,res,next)=>{
    coatings((err,results) => {
      var arrdata = [];
      const chunkSize = 3;
      for (let i = 0; i < results.length; i += chunkSize) {
          const chunk = results.slice(i, i + chunkSize);
          // arrdata[i] = Object.entries(chunk);
          arrdata.push(chunk);
        }
        console.log(results);
        if (err) {
          // console.log(err);
          return;
        }
     res.render("pages/projects/coating", { title: "Express", data:arrdata ,active_nav: "home" });
    });
    },
    frp_jobs:(req,res,next)=>{
      frp((err,results) => {
        var arrdata = [];
        const chunkSize = 3;
        for (let i = 0; i < results.length; i += chunkSize) {
            const chunk = results.slice(i, i + chunkSize);
            // arrdata[i] = Object.entries(chunk);
            arrdata.push(chunk);
          }
        console.log(results);
        if (err) {
          // console.log(err);
          return;
        }
     res.render("pages/projects/frp_jobs", { title: "Express", data:arrdata ,active_nav: "home" });
    });
    },
   manpower_services:(req,res,next)=>{
    manpower((err,results) => {
      var arrdata = [];
      const chunkSize = 3;
      for (let i = 0; i < results.length; i += chunkSize) {
          const chunk = results.slice(i, i + chunkSize);
          // arrdata[i] = Object.entries(chunk);
          arrdata.push(chunk);
        }
      console.log(results);
      if (err) {
        // console.log(err);
        return;
      }
   res.render("pages/projects/manpower_services", { title: "Express", data:arrdata ,active_nav: "home" });
  });
    },

 }