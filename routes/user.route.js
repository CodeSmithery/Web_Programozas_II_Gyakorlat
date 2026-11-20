const router = require("express").Router();
const userController = require("../controllers/user.controller.js")

isAdmin=(req,res,next)=>{
    if(req.session.user && req.session.user.role==="admin"){return next();}
    res.redirect("/");
}


router.get("/users", isAdmin, userController.getAllUsers, (req, res) => {
    res.render("users", {users: res.locals.users})
});
module.exports = router;