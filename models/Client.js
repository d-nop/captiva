const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const ClientSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  id: { type: String, required: true },
  secret: { type: String, required: true },
  userId: { type: String, required: true }
});

ClientSchema.pre("save", function (next) {

  var user = this;
  const SALT_WORK_FACTOR = 5;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

ClientSchema.methods.comparePassword = function (possPassword, cb) {
  bcrypt.compare(possPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client