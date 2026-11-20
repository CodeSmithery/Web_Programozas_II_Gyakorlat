const router = require("express").Router();
const materialCodeController = require("../controllers/materialCode.controller.js");


isAdmin=(req,res,next)=>{
    if(req.session.user && req.session.user.role==="admin"){return next();}
    res.redirect("/");
}


router.get("/materialCodes", isAdmin, materialCodeController.getAllMaterialCodes, (req, res) => {
    res.render("materialCodes", {materialCodes: res.locals.materialCodes})
});

module.exports = router;