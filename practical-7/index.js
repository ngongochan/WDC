var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/brew', (req, res) => {
  var drink = req.query.drink;

  if (drink === 'tea') {
      res.send('A delicious cup of tea!');
  } else if (drink === 'coffee') {
      res.sendStatus(418);
  } else {
      res.sendStatus(400);
  }
});

var prev_message = "first";
router.post('/pass-it-on', (req, res) => {
  var form = req.body;
  try {
    var message = form.message;
    if (message) {
      res.send(prev_message);
      prev_message = message;
    } else {
      res.sendStatus(400);
    }
  } catch(err) {
    res.sendStatus(400);
  }
});
module.exports = router;