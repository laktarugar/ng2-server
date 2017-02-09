const authService = require('../models/auth');
const name = 'Authorization';

module.exports.loggedMidlevare = function loggedMidlevare(req, res, next) {
  if (req.header('Authorization') && !authService.checkToken(req.header('Authorization'))) {
    res.status(401).json({error: 'Access denied'});
  } else {
    next();
  }
};

module.exports.nonLoggedMidlevare = function nonLoggedMidlevare(req, res, next) {
  if (req.header(name) !== undefined) {
    res.status(403).json({error: 'Access denied'});
  } else {
    next();
  }
};
