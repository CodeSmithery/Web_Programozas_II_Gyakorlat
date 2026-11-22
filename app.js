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
const mainRouter = require("./routes/mainRouter.js");
const dataRoute = require("./routes/data.route.js");
const methodOverride = require("method-override");


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
    res.locals.modified = req.session.modified || false;
    req.session.modified = false;
    res.locals.created = req.session.created || false;
    req.session.created = false;
    res.locals.deleted = req.session.deleted || false;
    req.session.deleted = false;
    next();
});
app.use(methodOverride("_method"));

// ROUTED
app.use("/", mainRouter);
app.use("/", feedbRoute);
app.use("/", dataRoute);
app.use("/crud", coinRoute);


app.use((req, res) => {
    res.status(404).render("404");
});
/*
app.use("/api/materialCodes", materCRoute);
app.use("/api/materials", materialRoute);
app.use("/api/coins", coinRoute);
app.use("/api/designerCodes", desigCRoute);
app.use("/api/designers", designerRoute);
app.use("/api/users", userRoute);
app.use("/api/feedbacks", feedbRoute);
*/
app.listen(process.env.PORT || 3000, () => {
    console.log("A szerver fut a http://localhost:" + (process.env.PORT || 3000) + " címen.");
});
