const checkToken = require("../auth/checkToken");
const verifyToken = require("../auth/verifyToken");
const db = require("../models");
const fs = require("fs");
const cloudinary = require("cloudinary");



module.exports.postNew=(req,res)=>{
  console.log(req.body.token);   
  const username= req.body.token;   
  const imgFilePath = "./temp/sorry.jpg"
  let incomingImg = req.body.imgString;
  incomingImg = incomingImg.split(';base64,').pop();
  fs.writeFile(imgFilePath, incomingImg, { encoding: 'base64' }, function(err) {
      console.log('File created');
  
  cloudinary.uploader.upload(imgFilePath,function(result, error){
        if (error) {
            console.log(error)
        } else {
          console.log("Cloudinary ran instead. It sucks");

          console.log(req.body.loc.coords);
            const newMedia = {
                url: result.secure_url,
                lat: req.body.loc.lat,
                long: req.body.loc.lng,
                timestamp:req.body.loc.timestamp
            };
            console.log(newMedia);
            db.Media.create(newMedia)
                .then(function(dbMedia) {
                  console.log("You've created something in the database")
                  console.log(dbMedia);
                    return db.User.findOneAndUpdate({ name:username} , { $push: { media: dbMedia._id } }, { new: true });
                })
                .catch(function(err) {
                    res.json(err);
                });
            };
            
        });
    })
}

module.exports.getLocal=(req,res)=>{
	console.log("the right local media");
	console.log(req.body);
  const currLat = req.body.loc.lat;
  const currLong = req.body.loc.lng;
  console.log(currLong,currLat);

        db.Media.find({})
        .where({
                    lat: {
                        $gte: currLat + 0.001,
                        $lte: currLat - 0.001
                    }
                } &&
                {
                    long: {
                        $gte: currLong + 0.001,
                        $lte: currLong - 0.001
                    }
      })
            .then(function(dbMedia) {
              console.log("searched");
                console.log(dbMedia);
                let newArr=[];
                dbMedia.forEach(element=>{
                  newArr.push(element.url);
                })
                console.log(newArr);
                res.json(newArr);
            })
            .catch(function(err) {
                return res.json(err);
            });

	 // jwt.verify(req.body.token, JWT_SECRET, function(err, decoded) {
  //     if (err) {
  //       console.log("You have a token and an error")
  //       console.log(err)
  //       return res.json({success: false, message: "Failed to authenticate token.", err: err});
  //     }
  //     else {
  //       console.log("You have a token and no error")
  //       console.log(decoded);
        
	
  //       console.log(req.headers.long);
  //       const currLat = req.headers.lat;
}

module.exports.userMedia =(req,res)=>{
  console.log("anything");
  console.log(req.params,req.body)
   db.User.findOne({ username: req.params.username})
      .populate("Media")
      .then(function(dbUser) {
        res.json(dbUser)
      })
      .catch(function(err) {
          return res.json(err);
      });
}