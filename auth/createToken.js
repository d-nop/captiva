jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET||"jhfgHKGl5968337oklshkjh";
const JWT_EXPIRY = process.env.JWT_EXPIRY||"7d";

module.exports=(user)=>{
    
  return jwt.sign({user}, "jhfgHKGl5968337oklshkjh", {
    subject: user,
    expiresIn: JWT_EXPIRY, 
    algorithm: 'HS256'
  });
};