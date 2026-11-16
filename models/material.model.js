const mongoose = require("mongoose");

const anyagSchema = new mongoose.Schema({
    femid: { // A Fém azonosítója
        type: Number,
        unique: true,
        required: [true, "Fém ID megadása kötelező!"],
    },
    femnev: { // A fém neve
        type: String,
        required: [true, "Fém név megadása kötelező!"],
    }

});
module.exports = mongoose.model("Material", anyagSchema);