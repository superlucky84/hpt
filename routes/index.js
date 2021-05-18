const express = require('express');
// eslint-disable-next-line
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', {title: 'JINWOO!!!!!!'});
  res.render('index', { title: 'Tobi' }, function (err, html) {
    console.log(html);
    res.send(html)
  });
});

module.exports = router;
