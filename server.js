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
//const base64 = require("./base64");

//Configuring Cloudinary
cloudinary.config({

  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret

});


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Setting up middleware
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));

//Configuring mongoose to use promises.
mongoose.Promise = Promise;
const mongoDB_URI = process.env.MONGODB_URI || "mongodb://localhost/captivaDB";
mongoose.connect(mongoDB_URI, {
});




//# API ROUTES
app.get("/api/media", function (req, res) {



  function success(pos) {
    console.log(pos);
    db.Media.find({ location: pos })
      .then(function (dbMedia) {
        res.json(dbMedia);
      })
      .catch(function (err) {
        return res.json(err);
      });

    let err = err => {
      console.log(err);
    };

    let options = {
      enableHighAccuracy: true,
      timeout: 10000
    };
  }

  navigator.geolocation.getCurrentPosition(success, err, options);


});

app.get("/api/media/:id", function (req, res) {

  db.Media.findOne({ _id: req.params.id })
    .then(function (dbMedia) {
      res.json(dbMedia);
    })
    .catch(function (err) {
      return res.json(err);
    });

});

//First we will upload to cloudinary, then pass that url to mongoose.
app.post("/api/media", function (req, res) {
  let incomingImg = base64;

  //assign a unique identifier to filePath

  

  const filePath = "./temp/" + "Dan5" + ".jpg"

  incomingImg = incomingImg.split(';base64,').pop();

  fs.writeFile(filePath, incomingImg, { encoding: 'base64' }, function (err) {
    console.log('File created');
  });

  cloudinary.uploader.upload(filePath,
    function (result, error) {

      const newMedia = {

        url: result.secure_url,

      }

      if(error) {
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