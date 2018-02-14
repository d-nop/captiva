const db = require("../models");


module.exports.allUsers=(req,res)=>{
	db.User.find({})
        .then(function(dbUser) {
            res.json(dbUser);

        })
        .catch(function(err) {
            return res.json(err);
        });
}
