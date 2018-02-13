jwt = require('jsonwebtoken');

module.exports=(user)=>{
    const JWT_SECRET = process.env.JWT_SECRET||"jhfgHKGl5968337oklshkjh";
    const JWT_EXPIRY = process.env.JWT_EXPIRY||"7d";
  return jwt.sign({user}, "jhfgHKGl5968337oklshkjh", {
    subject: user,
    expiresIn: JWT_EXPIRY, 
    algorithm: 'HS256'
  });
};