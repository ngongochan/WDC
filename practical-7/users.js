var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/*', function(req, res, next) {
  console.log("POST from a user");
  next();
});

router.post('/*', function(req, res, next) {
  var contentType = req.headers['content-type'];

  if (contentType && contentType.includes('application/json')) {
    next();
  } else {
    res.sendStatus(412);
  }
});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;