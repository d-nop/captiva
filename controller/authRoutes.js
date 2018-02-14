const checkToken = require("../auth/checkToken");
const verifyToken = require("../auth/verifyToken");
const createToken = require("../auth/createToken");
const db = require("../models");
const bcrypt = require("bcrypt");

module.exports.register=(req,res)=>{
	console.log(req.body);
	//check if user exists
    db.User.findOne({ username: req.body.username})
        .then(dbUser => {
            if (dbUser) {
                // res.json(dbUser);
                res.sendStatus(208);
            } else {
                console.log(req.body);
                const user = new db.User(req.body);
                user.save((err, user) => {
                    if (err) {
                        console.log(err);
                    } else {
                    	//create token
                        const authToken = createToken(user);
                        console.log(authToken);
                        const newUser = {
                        	username:user.username,
                        	token:authToken
                        };
                        console.log(newUser);
                        window.location="/capture";
                        res.json(newUser);
                        //redirect to camera
                    };
                });
            };
        })
        .catch((err) => {
            return res.json(err);
        });
}

module.exports.login = (req,res)=>{
	console.log(req.body);
    db.User.findOne({ username: req.body.username})
        .then(dbUser => {
            console.log(dbUser);

            bcrypt.compare(req.body.password, dbUser.password)
            	.then(isValid => {
            		if(isValid) {
            			const authToken = createToken(dbUser.password);
	                    console.log(authToken);
	                	const newUser = {
	                    	username:dbUser.username,
	                    	token:authToken
	                    };
	                    console.log(newUser);
	                    return Promise.resolve(res.json(newUser));
	            		}
	            		else{
	            			return Promise.reject(res.status(401))
	            		}
            	})
            	.catch(err => {
            		console.log('Login error: ',err)
            		return Promise.reject(res.status(500))
            	})
            })
};
