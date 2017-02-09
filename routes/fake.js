var express = require('express');
var router = express.Router();

router.post('/rand', function(req, res, next) {
    res.json({res: Math.round(Math.random()*1000)});
});


router.post('/check', function(req, res, next) {
    res.json({res: true});
});

module.exports = router;
