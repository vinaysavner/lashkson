require("dotenv").config();
const express = require("express");
const app = express();

const path = require("path");
const fileUpload = require('express-fileupload')
const flash = require('connect-flash');
const bodyParser = require('body-parser')
const session = require('express-session');
var multer = require('multer');
const nodemailer = require("nodemailer");


const pool = require("./config/database");
const homeRouter = require("./routes/home");
const projectRouter = require("./routes/projects");
const contactRouter = require("./routes/contact")
const project_pagesRouter = require("./routes/project_pages");

const aboutRouter = require("./routes/about");
const adminRouter = require("./routes/backend/admin");

async function mainMail(firstname,lastname, email, message) {
  const transporter = await nodemailer.createTransport({
    service: "gmail",
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: "gourav.exergy@gmail.com",
      pass: "qumxbyyzfyfazmyp",
   
    },
  });
  const mailOption = {
    // from: "payal.exergy@gmail.com",
    to: "gourav.exergy@gmail.com",
    html: `You got a message from 
    Email : ${email}
    FirstName: ${firstname}
    LastName: ${lastname}
    Message: ${message}`,
  };
  try {
    await transporter.sendMail(mailOption);
    return Promise.resolve("Message Sent Successfully!");
  } catch (error) {
    return Promise.reject(error);
  }
}
exports.someAction = function (request, reply) {
  var postParams = request.payload
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/views/public"));
app.use(fileUpload());
if (pool) {
  console.log("Connection Success");
} else {
  console.log("Cant connect to db, Check ur db connection");
}


app.use(flash());

const now = new Date();
// const value = date.format(now, 'YYYY/MM/DD HH:mm:ss');
// console.log("current date and time : " + value)
const oneDay = 1000 * 60 * 60 * 24;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    name: 'myCookie',
    cookie: { maxAge: oneDay },
    secret: "app",
    name: "app",
    resave: true,
    saveUninitialized: true,
    unset: 'destroy'
    // cookie: { maxAge: 6000 } /* 6000 ms? 6 seconds -> wut? :S */
  })
);
app.post("/getConnected", async (req, res, next) => {

console.log(req);


  const { firstname,lastname, youremail, yourmessage } = req.body;
  try {
 mainMail(firstname,lastname,youremail, yourmessage);
    
    res.send("Message Successfully Sent!");
  } catch (error) {
    res.send("Message Could not be Sent");
  }
});
app.use(express.static(__dirname + "/views/public"));





app.use("/", homeRouter)
app.use("/", projectRouter)
app.use("/", project_pagesRouter)
app.use("/", aboutRouter)
app.use("/", contactRouter)
app.use("/",adminRouter)

app.listen(process.env.APP_PORT, () => {
  console.log("Server is running at port 8000..", process.env.APP_PORT);
});
