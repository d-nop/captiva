// //import database...var db = require("");
 
//  module.exports=possCreds=>{
 
//     // decode Creds
//     var decodedCreds = jwt.decode(possCreds, secret);
//     console.log(decodedCreds);
//     //check db for username
//     db.User.findOne({username:decodedCreds.username})
//         .then(res=>{
//             if(res.username===decodedCreds.username){
//                 return true
//             }
//             else {return false};
//         })
 
 
// };
JWT_SECRET = require("./createToken.js");
jwt = require("jsonwebtoken");

module.exports = token=>{
  jwt.verify(token, JWT_SECRET, function(err, decoded) {
      if (err) {
        console.log("You have a token and an error")
        console.log(err)
        return res.json({success: false, message: "Failed to authenticate token.", err: err});
      }
      else {
        console.log("You have a token and no error")
        console.log(decoded);
        return decoded;
        
      }
    })
}