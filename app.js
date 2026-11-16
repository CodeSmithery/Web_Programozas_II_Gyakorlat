require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const connectDB = require("./config/db.js");
const session = require("express-session");
const {MongoStore} = require("connect-mongo");

// ROUTES
const materCRoute = require("./routes/materialCode.route.js");
const materialRoute = require("./routes/material.route.js");
const coinRoute = require("./routes/coin.route.js");
const desigCRoute = require("./routes/designerCode.route.js");
const designerRoute = require("./routes/designer.route.js");
const userRoute = require("./routes/user.route.js");
const feedbRoute = require("./routes/feedback.route.js");
const mainRouter = require("./routes/mainRouter.js")


// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: true}))
connectDB();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({mongoUrl: process.env.SESSION_MONGO_URI, collectionName:"sessions"}) 
}));
app.use((req, res, next) => {
    res.locals.user = req.session.user;
    res.locals.message = req.session.message || "";
    req.session.message = "";
    next();
});
app.use("/", require("./routes/mainRouter"));

// ROUTED
app.use("/api/materialCodes", materCRoute);
app.use("/api/materials", materialRoute);
app.use("/api/coins", coinRoute);
app.use("/api/designerCodes", desigCRoute);
app.use("/api/designers", designerRoute);
app.use("/api/users", userRoute);
app.use("/api/feedbacks", feedbRoute);

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(process.env.PORT || 3000, () => {
    console.log("A szerver fut a http://localhost:" + (process.env.PORT || 3000) + " címen.");
});
