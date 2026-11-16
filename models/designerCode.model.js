const mongoose = require("mongoose");

const designercodeSchema = new mongoose.Schema({
    ermeid: { // A forintérme azonosítója
        type: Number,
        unique: true,
        required: [true, "Érem ID megadása kötelező!"],
    },
    tervezoid: { // Az érme tervezőjének azonosítója
        type: Number,
        required: [true, "Tervező ID megadása kötelező!"],
    }

});
module.exports = mongoose.model("DesignerCode", designercodeSchema);