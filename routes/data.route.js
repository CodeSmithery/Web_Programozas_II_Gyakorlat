const router = require("express").Router();
const designerController = require("../controllers/designer.controller.js");
const coinController = require("../controllers/coin.controller.js");
const designerCodeController = require("../controllers/designerCode.controller.js");
const materialController = require("../controllers/material.controller.js");
const materialCodeController = require("../controllers/materialCode.controller.js");


router.get("/database", 
    designerController.getAllDesigners, // designers
    coinController.getAllCoins, // coins
    materialController.getAllMaterials, // materials
    materialCodeController.getAllMaterialCodes, // materialCodes
    designerCodeController.getAllDesignerCodes, // designerCodes
    (req, res) => {
        res.render("database", {
            coins: res.locals.coins,
            designers: res.locals.designers,
            designerCodes: res.locals.designerCodes,
            materials: res.locals.materials,
            materialCodes: res.locals.materialCodes
        })
    });

    router.get("/diagram", coinController.getAllCoins, (req, res) => {
        res.render("diagram", {coins: res.locals.coins})
    });



module.exports = router;