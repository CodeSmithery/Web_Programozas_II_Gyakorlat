const router = require("express").Router();
const materialController = require("../controllers/material.controller.js");


isAdmin=(req,res,next)=>{
    if(req.session.user && req.session.user.role==="admin"){return next();}
    res.redirect("/");
}


router.get("/materials", isAdmin, materialController.getAllMaterials, (req, res) => {
    res.render("materials", {materials: res.locals.materials})
});

module.exports = router;