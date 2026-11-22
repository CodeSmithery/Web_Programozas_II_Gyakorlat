const router = require("express").Router();
const coinController = require("../controllers/coin.controller.js");

isAdmin=(req,res,next)=>{
    if(req.session.user && req.session.user.role==="admin"){return next();}
    res.redirect("/");
}


router.get("/", isAdmin, coinController.getAllCoins, (req, res) => {
    res.render("crud", {coins: res.locals.coins})
});
router.put("/:id", isAdmin, coinController.modifyCoin, (req, res) => {
    res.redirect("/crud")
});
router.post("/create", isAdmin, coinController.createCoin, (req, res) =>{
    res.redirect("/crud")
});
router.delete("/del/:id", isAdmin, coinController.deleteCoin, (req,res) =>{
    res.redirect("/crud")
})

module.exports = router;