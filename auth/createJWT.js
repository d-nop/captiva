module.exports=(creds)=>{

// sign with default (HMAC SHA256)
var jwt = require('jsonwebtoken');
var secret=Buffer.from('fe1a1915a379f3be5394b64d14794932', 'hex');
var token = jwt.sign({ userInfo: creds}, secret);
//backdate a jwt 30 seconds
var older_token = jwt.sign({ userInfo: creds, iat: Math.floor(Date.now() / 1000) - 30 }, secret);
 
// sign with RSA SHA256
var cert = fs.readFileSync('private.key');  // get private key
var token = jwt.sign({ userInfo: creds }, cert, { algorithm: 'RS256'});
 
// sign asynchronously
jwt.sign({ userInfo: creds }, cert, { algorithm: 'RS256' }, function(err, token) {
  console.log(token);
});

//-------------------------------------------------//

var jwt = require('jwt-simple');
var payload = { userInfo: creds };
var secret=Buffer.from('fe1a1915a379f3be5394b64d14794932', 'hex');
 
// HS256 secrets are typically 128-bit random strings, for example hex-encoded: 
// var secret = Buffer.from('fe1a1915a379f3be5394b64d14794932', 'hex) 
 
// encode 
var token = jwt.encode(payload, secret);
 return token;



}