const router = require("express").Router();
const userController = require("../controllers/user.controller.js")

// ___________________ Create ___________________ //

router.post("/", userController.createUser);

// ___________________ Get All ___________________ //

router.get("/", userController.getAllUsers);

// ___________________ Get Single ___________________ //

router.get("/:id", userController.getSingleUser);

// ___________________ Modify ___________________ //

router.put("/:id", userController.modifyUser);

// ___________________ Delete ___________________ //

router.delete("/:id", userController.deleteUser);

module.exports = router;