const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const logger = require("morgan");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./models");
const cloudinary = require("cloudinary");
//const cloudinaryKeys = require("./cloudinaryKeys");
const bcrypt = require("bcrypt");
const fs = require("fs");

// const LocalStrategy = require("./auth/authStrategy");
//const verifyToken = require("./auth/verifyToken");
//const geoloc = require("./client/src/utils/Geolocation/geoLocation");
//const createToken = require("./auth/createToken");
//const jwt = require ("jsonwebtoken");

//Configuring Cloudinary
cloudinary.config({

  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET


});

// cloudinary.config({

//   cloud_name: cloudinaryKeys.cloud_name,
//   api_key: cloudinaryKeys.cloudinary_api_key,
//   api_secret: cloudinaryKeys.cloudinary_api_secret


// });

// passport.use(new OAuth2Strategy({
//     authorizationURL: 'https://www.example.com/oauth2/authorize',
//     tokenURL: 'https://www.example.com/oauth2/token',
//     clientID: "999497679292-72mf97o9d4nnf5d120d8lst59u6rjkrk.apps.googleusercontent.com",
//     clientSecret: "AIzaSyAuQbjowRwL09_FTtfdM9yznkDT5dK0fhE",
//     callbackURL: "http://localhost:3000/auth/example/callback"
//   },


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Setting up middleware
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configuring mongoose to use promises.
mongoose.Promise = Promise;
const mongoDB_URI = process.env.MONGODB_URI || "mongodb://localhost/captivaDB";
mongoose.connect(mongoDB_URI, {
});


//auth routes
app.post("/register", (req,res)=>{
  console.log(req.body);
  db.User.findOne({username:req.body.username})
    .then(dbUser=>{
      if(dbUser){
        // res.json(dbUser);
        res.send("user already exists");
      }
      else{
        console.log(req.body);
        const user = new db.User(req.body);
        user.save((err,user)=>{
            if(err){
              console.log(err);
            }
            else{
            const authToken=createToken(user);
            // user.update{$set:{token:authToken}};
            console.log(authToken);
            res.redirect("/camera");
          };
          });
      };
    })
    .catch((err)=>{
      return res.json(err);
    });
});




app.post("/login", (req,res)=>{
  console.log(req.body);
  
  
  db.User.findOne({username:req.body.username})
    .then(dbUser=>{
      console.log(dbUser);

      bcrypt.compare(req.body.password, dbUser.password, (err, bool)=> {
        console.log(dbUser.password);
        if (err){
          console.log(err);
          
        }
        else if (bool===true){
          return res.json(tokenObj);
          // res.redirect('/Media');
        }
        else{
          res.send("Invalid password");
          // res.redirect("/Login");
        }
      })
    })
})

//# API ROUTES
app.get("/api/loc/media", function (req, res) {

  // jwt.verify(req.token, "JWT_SECRET", (err,data)=>{
  //   if(err){
  //     // res.send("failed to verify token", err);
  //     next();
  //   }
  //   else{
  //     //hit the db
     
  //   };
  // });
  console.log(geoloc);
      const currLat = geoloc.lat;
      const currLong = geoloc.long;

      db.Media.find({}).$where({
      lat: {
        $gte: currLat + 0.0000001,
        $lte: currLat - 0.0000001
      }
    }
    &&
    {
      long: {
        $gte: currLong + 0.000001,
        $lte: currLong - 0.000001
      }
    })
      .then(function (dbMedia) {
        res.json(dbMedia);
      })
      .catch(function (err) {
        return res.json(err);
      });

});

app.get("/api/user/media", function (req, res) {
  var token = req.headers['authorisation'];
  console.log("++++++++++++++++Token++++++++++++++++++++++++")
  console.log(token)
  if(token) {
    console.log("You have a token")
    jwt.verify(token, "jhfgHKGl5968337oklshkjh", function(err, decoded) {
      if (err) {
        console.log("You have a token and an error")
        console.log(err)
        return res.json({success: false, message: "Failed to authenticate token.", err: err});
      }
      else {
        console.log("You have a token and no error")
        console.log(decoded);
        req.decoded = decoded
        res.json(decoded);

      }
    }    )
  } else {
    console.log("No token")
    return res.status(403).send({
      success: false,
      message: "No token provided"
    })
  }
  // if(verifyToken(req.header)){
  //   db.Media.findOne({ _id: req.params.id })
  //   .then(function (dbMedia) {
  //     res.json(dbMedia);
  //   })
  //   .catch(function (err) {
  //     return res.json(err);
  //   });

  // }
  
});

//First we will upload to cloudinary, then pass that url to mongoose.
app.post("/api/media", function (req, res) {
  const imgFilePath = "./temp/" + req.body.timestamp + ".jpg"
  //const vidFilePath = "./temp/" + req.body.timestamp + "### VIDEO FILE EXT ###"


  let incomingImg = req.body.imgString;
  //let incomingVid = req.body.???

  incomingImg = incomingImg.split(';base64,').pop();

  fs.writeFile(imgFilePath, incomingImg, { encoding: 'base64' }, function (err) {
    console.log('File created');
  });

  cloudinary.uploader.upload(imgFilePath,
    function (result, error) {
      console.log(result);
      console.log(req.body);

      const newMedia = {

        url: result.secure_url,
        media_type: result.resource_type,
        //timestamp: req.body.timestamp,
        //lat: req.body.lat,
        //long: req.body.long

      }

      if (error) {
        console.log(error)
      } else {
        console.log(result);
      }

      db.Media.create(newMedia)
        .then(function (dbMedia) {
          res.json(dbMedia);
        })
        .catch(function (err) {
          res.json(err);
        });
    });


});

app.get("/api/users", function (req, res) {

  db.User.find({})
    .then(function (dbUser) {
      res.json(dbUser);
    })
    .catch(function (err) {
      return res.json(err);
    });

});

app.get("/api/users/:id", function (req, res) {



  db.User.findOne({ _id: req.params.id }).populate("Media")

    .then(function (dbUser) {

    })
    .catch(function (err) {
      return res.json(err);
    });


});


app.post("/api/users", function (req, res) {



  db.User.save(req.body).then(function (dbUser) {
    console.log(dbUser);
  }).catch(function (err) {
    return res.json(err);
  });

});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});