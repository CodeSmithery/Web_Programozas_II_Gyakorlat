const router = require("express").Router();
const designerController = require("../controllers/designer.controller.js");


// ___________________ Create ___________________ //

router.post("/", designerController.createDesigner);

// ___________________ Get All ___________________ //

router.get("/", designerController.getAllDesigners);

// ___________________ Get Single ___________________ //

router.get("/:id", designerController.getSingleDesigner);

// ___________________ Modify ___________________ //

router.put("/:id", designerController.modifyDesigner);

// ___________________ Delete ___________________ //

router.delete("/:id", designerController.deleteDesigner);

module.exports = router;