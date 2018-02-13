jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET||"jhfgHKGl5968337oklshkjh";
const JWT_EXPIRY = process.env.JWT_EXPIRY||"7d";

module.exports.verify=(user)=>{
    
  return jwt.sign({user}, JWT_SECRET, {
    subject: user,
    expiresIn: JWT_EXPIRY, 
    algorithm: 'HS256'
  });
};