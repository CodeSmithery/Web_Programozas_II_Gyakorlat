const router = require("express").Router();
const controller = require("../controllers/feedback.controller.js");

router.get("/contact", controller.contactIndex);
router.post("/contact", controller.createFeedback);
router.get("/messages", controller.getFeedbacks);

module.exports = router;