var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  console.log('RES', res);
  res.render('user', { name: 'Tobi' }, function (err, html) {
    console.log(html);
    res.send('<div>jj {{name}}</div>')
  });
});

module.exports = router;
