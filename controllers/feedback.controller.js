const feedback = require("../models/feedback.model.js");

const createFeedback = async (req, res) => {
    try{
        const newFeedback = await feedback.create(req.body);
        res.status(200).json({message: "Sikeresen beküldve!", object: newFeedback});
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
}

const getFeedbacks = async (req,res) => {
    try{
        const feedbacks = await feedback.find({});
        feedbacks.sort((a, b) => b.createdAt - a.createdAt); // Újak előre
        res.status(200).json({object: feedbacks});
    }
    catch (err) {
        res.status(500).json({message: err.message}); 
    }
}

module.exports = {
    createFeedback,
    getFeedbacks
}