const router = require("express").Router();
const feedbackController = require("../controllers/feedback.controller.js");

router.get("/", feedbackController.getFeedbacks);
router.post("/", feedbackController.createFeedback);

module.exports = router;