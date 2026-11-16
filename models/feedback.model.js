const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    nev: { // A bejelentő neve
        type: String,
        required: true,
    },
    uzenet: { // Az üzenet szövege
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    }
);
module.exports = mongoose.model("Feedback", feedbackSchema);