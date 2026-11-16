const router = require("express").Router();
const coinController = require("../controllers/coin.controller.js");


// ___________________ Create ___________________ //

router.post("/", coinController.createCoin);

// ___________________ Get All ___________________ //

router.get("/", coinController.getAllCoins);

// ___________________ Get Single ___________________ //

router.get("/:id", coinController.getSingleCoin);

// ___________________ Modify ___________________ //

router.put("/:id", coinController.modifyCoin);

// ___________________ Delete ___________________ //

router.delete("/:id", coinController.deleteCoin);

module.exports = router;