


module.exports = {
    ContactUs: (req,res,next) =>{
        res.render("pages/frontend/contact", { title: "Express",active_nav: "contact" })
    },
    
}