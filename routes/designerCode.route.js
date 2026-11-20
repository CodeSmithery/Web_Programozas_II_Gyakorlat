const router = require("express").Router();
const designerCodeController = require("../controllers/designerCode.controller.js");

isAdmin=(req,res,next)=>{
    if(req.session.user && req.session.user.role==="admin"){return next();}
    res.redirect("/");
}


router.get("/designerCodes", isAdmin, designerCodeController.getAllDesignerCodes, (req, res) => {
    res.render("designerCodes", {designerCodes: res.locals.designerCodes})
});

module.exports = router;