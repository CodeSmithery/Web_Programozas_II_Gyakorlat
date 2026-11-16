const router = require("express").Router();
const materialCodeController = require("../controllers/materialCode.controller.js")


// ___________________ Create ___________________ //

router.post("/", materialCodeController.createMaterialCode);

// ___________________ Get All ___________________ //

router.get("/", materialCodeController.getAllMaterialCodes);

// ___________________ Get Single ___________________ //

router.get("/:id", materialCodeController.getSingleMaterialCode);

// ___________________ Modify ___________________ //

router.put("/:id", materialCodeController.modifyMaterialCode);

// ___________________ Delete ___________________ //

router.delete("/:id", materialCodeController.deleteMaterialCode);

module.exports = router;