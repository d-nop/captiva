jwt = require('jsonwebtoken');

module.exports=(user)=>{
    const JWT_SECRET = "jhfgHKGl5968337oklshkjh";
    const JWT_EXPIRY = process.env.JWT_EXPIRY||"5d";
  return jwt.sign({user}, JWT_SECRET, {
    subject: user.username,
    expiresIn: JWT_EXPIRY, 
    algorithm: 'HS256'
  });
};