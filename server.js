
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const logger = require("morgan");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./models");
const cloudinary = require("cloudinary");
const cloudinaryKeys = require("./cloudinaryKeys");
const bcrypt = require("bcrypt");
const fs = require("fs");
// const LocalStrategy = require("./auth/authStrategy");
const jwtVerify = require("./auth/verifyToken");
const geoloc = require("./client/src/utils/Geolocation/geolocation");
const createToken = require("./auth/createToken");
const jwt = require("jsonwebtoken");
const authRoutes=require("./controller/authRoutes");
const apiRoutes=require("./controller/apiRoutes"); 
const adminRoutes=require("./controller/adminRoutes");

// const LocalStrategy = require("./auth/authStrategy");
//const verifyToken = require("./auth/verifyToken");
//const geoloc = require("./client/src/utils/Geolocation/geoLocation");
//const createToken = require("./auth/createToken");
//const jwt = require ("jsonwebtoken");

//Configuring Cloudinary
cloudinary.config({
    cloud_name: cloudinaryKeys.cloud_name,
    api_key: cloudinaryKeys.cloudinary_api_key,
    api_secret: cloudinaryKeys.cloudinary_api_secret
});

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET
// });

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
//Setting up middleware
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Configuring mongoose to use promises.
mongoose.Promise = Promise;
const mongoDB_URI = process.env.MONGODB_URI || "mongodb://localhost/captivaDB";
mongoose.connect(mongoDB_URI, {});

//auth routes
app.post("/register",authRoutes.register);

app.post("/login",authRoutes.login);

//# API ROUTES
app.post("/api/loc/media", apiRoutes.getLocal);

// app.get("/api/user/media", function(req, res) {
//     var token = req.headers['authorisation'];
//     console.log("++++++++++++++++Token++++++++++++++++++++++++")
//     console.log(token)
//     if (token) {
//         console.log("You have a token")
//         jwt.verify(token, "jhfgHKGl5968337oklshkjh", function(err, decoded) {
//             if (err) {
//                 console.log("You have a token and an error")
//                 console.log(err)
//                 return res.json({ success: false, message: "Failed to authenticate token.", err: err });
//             } else {
//                 console.log("You have a token and no error")
//                 console.log(decoded);
//                 req.decoded = decoded
//                 db.Media.findOne({ _id: req.params.id })
//                     .then(function(dbMedia) {
//                         res.json(dbMedia);
//                     })
//                     .catch(function(err) {
//                         return res.json(err);
//                     });

//             }
//         })
//     } else {
//         console.log("No token")
//         return res.status(403).send({
//             success: false,
//             message: "No token provided"
//         })
//     }

// });

//First we will upload to cloudinary, then pass that url to mongoose.
app.post("/api/media",apiRoutes.postNew);

app.get("/admin/users", adminRoutes.allUsers);

app.post("/api/user/:username", apiRoutes.userMedia);



app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);

});