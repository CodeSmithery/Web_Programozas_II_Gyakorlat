const router = require("express").Router();
const materialController = require("../controllers/material.controller.js")


// ___________________ Create ___________________ //

router.post("/", materialController.createMaterial);

// ___________________ Get All ___________________ //

router.get("/", materialController.getAllMaterials);

// ___________________ Get Single ___________________ //

router.get("/:id", materialController.getSingleMaterial);

// ___________________ Modify ___________________ //

router.put("/:id", materialController.modifyMaterial);

// ___________________ Delete ___________________ //

router.delete("/:id", materialController.deleteMaterial);

module.exports = router;