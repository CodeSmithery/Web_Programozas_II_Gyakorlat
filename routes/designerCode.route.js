const router = require("express").Router();
const designerCodeController = require("../controllers/designerCode.controller.js");

// ___________________ Create ___________________ //

router.post("/", designerCodeController.createDesignerCode);

// ___________________ Get All ___________________ //

router.get("/", designerCodeController.getAllDesignerCodes);

// ___________________ Get Single ___________________ //

router.get("/:id", designerCodeController.getSingleDesignerCode);

// ___________________ Modify ___________________ //

router.put("/:id", designerCodeController.modifyDesignerCode);

// ___________________ Delete ___________________ //

router.delete("/:id", designerCodeController.deleteDesignerCode);

module.exports = router;