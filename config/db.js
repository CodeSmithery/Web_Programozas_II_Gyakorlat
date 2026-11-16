const mongoose = require("mongoose");

const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Csatlakoztatva a MongoDB-hoz");
    }).catch((err) => {
            console.error("Nem sikerült csatlakozni a MongoDB-hoz:\n", err);
            process.exit(1);
    });
}

module.exports = connectDB;

