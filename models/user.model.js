const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: [true, "Felhasználónév megadása kötelező!"],
    },

    password: {
        type: String,
        required: [true, "Jelszó megadása kötelező!"],
    },

    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }

},
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", userSchema);