//import database...var db = require("");
 
 module.exports=possCreds=>{
 
    // decode Creds
    var decodedCreds = jwt.decode(possCreds, secret);
    console.log(decodedCreds);
    //check db for username
    db.User.findOne({username:decodedCreds.username})
        .then(res=>{
            if(res.username===decodedCreds.username){
                return true
            }
            else {return false};
        })
 
 
};