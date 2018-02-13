const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
SALT_WORK_FACTOR = 10;


const Schema = mongoose.Schema;

const UserSchema = new Schema({

    username: {
        type: String,
        // required: true,
        unique: true
    },

    password: {
        type: String,
        // required: true,

    },

    token: {
        type:String
    },

    media: [{

        type: Schema.Types.ObjectId,
        ref: "Media"
    }]

    

});

const User = mongoose.model("User", UserSchema);

UserSchema.pre('save', function(next) {
    var user = this;

if (!user.isModified('password')) return next();


bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);

         user.password = hash;
         console.log(hash);
        next();
    });
});


});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};


module.exports = User;
