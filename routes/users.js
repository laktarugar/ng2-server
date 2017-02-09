var express = require('express');
var router = express.Router();
const authService = require('../models/auth');

/* GET users listing. */
router.post('/login', function (req, res, next) {
  console.log(req);

  if (req.body.login === 'login' && req.body.password === 'password') {
    const token = authService.login();

    res.json({
      token
    });
  } else {
    res.status(406).json({error: 'Wrong password or login'})
  }
});

module.exports = router;
