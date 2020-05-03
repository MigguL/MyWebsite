const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const namespace = 'http://localhost:3000/';

// MIDDLEWARE
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 15,
    jwksUri: 'https://dev-miggul.eu.auth0.com/.well-known/jwks.json'
  }),
  audience: 'x83RSl6ztleTL9V4QRnHw7da6caC375f',
  issuer: 'https://dev-miggul.eu.auth0.com/',
  algorithms: ['RS256']
})


exports.checkRole = role => (req, res, next) => {
  const user = req.user;

  if (user && (user[namespace + 'role'] === role)) {
    next();
  } else {
    return res.status(401).send({title: 'Not Authorized', detail: 'You are not authorized to access this data'})
  }
}



