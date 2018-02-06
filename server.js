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
app.use(bodyParser.urlencoded({ extended: true }));

//Configuring mongoose to use promises.
mongoose.Promise = Promise;
const mongoDB_URI = process.env.MONGODB_URI || "mongodb://localhost/captivaDB";
mongoose.connect(mongoDB_URI, {
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


//# API ROUTES
app.get("/media", function (req, res) {

  db.Media.find({})
    .then(function (dbMedia) {
      res.json(dbMedia);
    })
    .catch(function (err) {
      return res.json(err);
    });

});

app.get("/media/:id", function (req, res) {

  db.Media.findOne({ _id: req.params.id })
    .then(function (dbMedia) {
      res.json(dbMedia);
    })
    .catch(function (err) {
      return res.json(err);
    });

});

//First we will upload to cloudinary, then pass that url to mongoose.
app.post("/media", function (req, res) {

  cloudinary.uploader.upload(req.body,
    function (result) {

      const cloudinaryURL = {

        url: result.secure_url


      };

      db.Media.create(cloudinaryURL)
        .then(function (dbMedia) {
          console.log(dbMedia)
        }).catch(function (err) {
          return res.json(err);
        });

    });

});

app.get("/users", function (req, res) {

  db.User.find({})
    .then(function (dbUser) {
      res.json(dbUser);
    })
    .catch(function (err) {
      return res.json(err);
    });

});

app.get("/users/:id", function (req, res) {

  db.User.findOne({ _id: req.params._id })
    .then(function (dbUser) {
      res.json(dbUser);
    })
    .catch(function (err) {
      return res.json(err);
    });

});


app.post("/users", function (req, res) {

  db.User.create(req.body).then(function (dbUser) {
    console.log(dbUser);
  }).catch(function (err) {
    return res.json(err);
  });

});

//# OAUTH2 API ROUTES
app.post("/api/client", function (req, res) {

  var client = new Client();

  client.name = req.body.name;
  client.id = req.body.id;
  client.secret = req.body.secret;
  client.userId = req.user._id;

  client.save(function (err) {
    if (err)
      res.send(err);

    res.json({ message: 'Client added to the locker!', data: client });
  });

});

app.get("/api/client", function (req, res) {

  Client.find({ userId: req.user._id }, function (err, clients) {
    if (err)
      res.send(err);

    res.json(clients);
  });

});

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});