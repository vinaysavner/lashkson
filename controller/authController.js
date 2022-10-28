const { login } = require('../model/services')
const { create } = require('../model/services')

const { contactDetails } = require('../model/services')
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const session = require('express-session')


module.exports = {
  login: (req, res, next) => {
    if (req.body.email == '' || req.body.password == '') {
      console.log("email", req.body.email);

      res.redirect('/admin/dashboard')
    } else {
      const body = req.body;
      login(body.email, (err, results) => {
        if (!results) {
          // res.send("Login Failed")
          res.redirect('/admin');
        }

        const result = compareSync(body.password, results.password);
        console.log("result=>",result)
        if (result == true) {

          let email = req.body.email;
          let password = req.body.password;
          console.log("emailllll=>", email);
          console.log("passsssss=>", password);

          req.session.email = email;

          req.session.password = password;
          // console.log('session.email: '+ req.session.email);

          req.session.loggedin = true;
          req.session.message = { status: 'success', message: `Welcome back` }
          res.setHeader('Content-Type', 'text/html')
          req.session.save(function (err) {

            if (err) {
              req.session.message = { status: 'danger', message: 'Failed to login, check password.' }
              req.session.save(() => {
                res.redirect('/admin')
              });
            } else {
              // console.log("error=>", err);
              delete req.session.password;
              // console.log( req.session);
              res.redirect('/admin/dashboard');
            }
          })
          // 

          // next();
          // });
        } else {
          req.session.message = { status: 'danger', message: 'Failed to login, check password.' }
          req.session.save(() => {
            res.redirect('/admin')
          });
        }
      });
    }


    // res.render("pages/subscriptions/create", { title: "Express"});

  },
  main: (req, res, next) => {

    res.render("pages/auth/login", { title: "Express" });
  },
  createUser: (req, res, next) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
      if (err) {
        // console.log(err);
        return res.status(500).json({
          success: 0,
          message: "database connection error",
        });
      }
      res.redirect('/login');
      next();
    });
  },
  logout: (req, res, next) => {
    res.clearCookie('myCookie');
    if (req.session) {
    req.session.destroy(err => {
    if (err) {
      res.status(400).send('Unable to log out')
    } else {
    res.redirect('/admin');
    next();
    }
    });
    } else {
      res.end()
    }
  }  
}