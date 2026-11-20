const router = require("express").Router();
const designerController = require("../controllers/designer.controller.js");


isAdmin=(req,res,next)=>{
    if(req.session.user && req.session.user.role==="admin"){return next();}
    res.redirect("/");
}


router.get("/designers", isAdmin, designerController.getAllDesigners, (req, res) => {
    res.render("designers", {designers: res.locals.designers})
});

module.exports = router;