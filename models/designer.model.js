const mongoose = require("mongoose");

const designerSchema = new mongoose.Schema({
    tid: { // Az érme tervezőjének azonosítója
        type: Number,
        unique: true,
        required: [true, "Tervező ID megadása kötelező!"],
    },
    nev: { // Az érme tervezőjének neve
        type: String,
        required: [true, "Tervező név megadása kötelező!"],
    }

});
module.exports = mongoose.model("Designer", designerSchema);