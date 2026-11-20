const feedback = require("../models/feedback.model.js");

const contactIndex = (req, res) => { res.render("contact"); };

const createFeedback = async (req, res) => {
    try{
        const newFeedback = await feedback.create(req.body);
        req.session.message = "Sikeresen beküldve!";
        res.redirect("/contact");
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
}

const getFeedbacks = async (req,res) => {
    try{
        const feedbacks = await feedback.find({});
        feedbacks.sort((a, b) => b.createdAt - a.createdAt); // Újak előre
        res.render("messages", {feedbacks});
    }
    catch (err) {
        res.status(500).json({message: err.message}); 
    }
}

module.exports = {
    contactIndex,
    createFeedback,
    getFeedbacks
}