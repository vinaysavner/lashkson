const nodemailer = require("nodemailer")


const msg ={
    from:"payal.exergy@gmail.com",
    to:"gourav.exergy@gmail.com",
    subject:"Nodemailer Testing",
    text:"Testing out first sender"
};
nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"payal.exergy@gmail.com",
        pass:"xupxpxhulxzesavx"
    },
    port:465,
    host:'smtp.gmail.com'
})
.sendMail(msg,(err)=>{
    if(err){
        return console.log('Error occurs',err)
    }else{
        return console.log('Email Sent')
    }
})
