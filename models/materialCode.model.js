const mongoose = require("mongoose");

const materialCodeSchema = new mongoose.Schema({
    ermeid: { // A forintérme azonosítója
        type: Number,
        unique: true,
        required: [true, "Érem ID megadása kötelező!"],
    },
    femid: { // Az érme fémjének azonosítója
        type: Number,
        required: [true, "Fém ID megadása kötelező!"],
    }
});
module.exports = mongoose.model("MaterialCode", materialCodeSchema);