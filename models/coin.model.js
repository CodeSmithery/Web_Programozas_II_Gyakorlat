const mongoose = require("mongoose");

const coinSchema = new mongoose.Schema({
    eremid: { // A forintérme azonosítója
        type: Number,
        unique: true,
        required: [true, "Érem ID megadása kötelező!"],
    },
    cimlet: { // A forintérme címlete
        type: Number,
        required: [true, "Címlet megadása kötelező!"],
    },
    tomeg: { // A forintérme tömege
        type: Number,
        required: false,
    },
    darab: { // A forintérme kiadott darabszáma
        type: Number,
        required: [true, "Darab megadása kötelező!"],
    },
    kiadas: { // A forintérme kiadásának időpontja
        type: Date,
        required: false,
    },
    bevonas: { // A forintérme bevonásának időpontja
        type: Date,
        required: false,
    },

});
module.exports = mongoose.model("Coin", coinSchema);