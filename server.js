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
const base64 = require("./base64");
// const LocalStrategy = require("./auth/authStrategy");
const jwtVerify = require("./auth/verifyToken");
const geoloc = require("./client/src/utils/Geolocation/geolocation");
const createToken = require("./auth/createToken");
const jwt = require("jsonwebtoken");
const authRoutes=require("./controller/authRoutes");
const apiRoutes=require("./controller/apiRoutes");




//Configuring Cloudinary
cloudinary.config({
    cloud_name: cloudinaryKeys.cloud_name,
    api_key: cloudinaryKeys.cloudinary_api_key,
    api_secret: cloudinaryKeys.cloudinary_api_secret
});


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
app.post("/register", (req, res) => {
  authRoutes.register(req,res);
});

app.post("/login",authRoutes.login);

//# API ROUTES
app.get("/api/loc/media", function(req, res) {

    if (jwtVerify(req.headers.authToken)) {
        console.log(req.headers.long);
        const currLat = req.headers.lat;
        const currLong = req.headers.long;

        db.Media.find({}).$where({
                    lat: {
                        $gte: currLat + 0.00001,
                        $lte: currLat - 0.00001
                    }
                } &&
                {
                    long: {
                        $gte: currLong + 0.0001,
                        $lte: currLong - 0.0001
                    }
                })
            .then(function(dbMedia) {
                console.log(dbMedia);
                res.json(dbMedia);
            })
            .catch(function(err) {
                return res.json(err);
            });
    } else {
        res.send("Unauthorised");
    }

});

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
app.post("/api/media", function(req, res) {
    const imgFilePath = "./temp/" + req.body.timestamp + ".jpg"
    
     db.User.findOne({ username: "jay" })
      .then(dbUser=>{
        if (dbUser||!dbUser) { 
        let incomingImg = req.body.imgString;
        //let incomingVid = req.body.???
        incomingImg = incomingImg.split(';base64,').pop();
        fs.writeFile(imgFilePath, incomingImg, { encoding: 'base64' }, function(err) {
            console.log('File created');
        });
        cloudinary.uploader.upload(imgFilePath,function(result, error)
             {
                if (error) {
                    // console.log(error)
                } else {
                  console.log(req.body.loc.coords);
                    const newMedia = {
                        url: result.secure_url,
                        // media_type: result.resource_type,
                        lat: req.body.loc.coords.latitude,
                        long: req.body.loc.coords.longitude,
                        timestamp: req.body.loc.timestamp
                    };
                    console.log(newMedia);
                    db.Media.create(newMedia)
                        .then(function(dbMedia) {
                            return db.User.findOneAndUpdate({ _id:user._id} , { $push: { media: dbMedia._id } }, { new: true });
                        })
                        .then(function(dbUser) {
                            res.json(dbUser);
                        })
                        .catch(function(err) {
                            res.json(err);
                        });
                };
                
            });
        }

      })
     

});

app.get("/api/users", function(req, res) {

    db.User.find({})
        .then(function(dbUser) {
            res.json(dbUser);
        })
        .catch(function(err) {
            return res.json(err);
        });

});

app.get("/api/users/:id", function(req, res) {
    db.User.findOne({ _id: req.params.id }).populate("Media")
        .then(function(dbUser) {})
        .catch(function(err) {
            return res.json(err);
        });
});

app.post("/api/users", function(req, res) {



    db.User.save(req.body).then(function(dbUser) {
        console.log(dbUser);
    }).catch(function(err) {
        return res.json(err);
    });

});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});