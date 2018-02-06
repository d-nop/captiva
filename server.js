const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const logger = require("morgan");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./models");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: true }));

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

app.post("/media", function (req, res) {

  db.Media.create(req.body)
    .then(function (dbMedia) {
      console.log(dbMedia)
    }).catch(function (err) {
      return res.json(err);
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


app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
