const router = require("express").Router();
const coinController = require("../controllers/coin.controller.js");

isAdmin=(req,res,next)=>{
    if(req.session.user && req.session.user.role==="admin"){return next();}
    res.redirect("/");
}


router.get("/coins", isAdmin, coinController.getAllCoins, (req, res) => {
    res.render("coins", {coins: res.locals.coins})
});
router.put("/coins/:id", isAdmin, coinController.modifyCoin, (req, res) => {
    res.redirect("/coins")
})

module.exports = router;