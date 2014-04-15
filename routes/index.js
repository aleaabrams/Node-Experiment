var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'App Made by Alea', subtitle: 'this is pretty cool, right?' });
});
router.get('/stuff', function(req, res) {
  res.render('stuff', { title: 'Stuff Pages of App Made by Alea' });
});
router.get('/one-more-time', function(req, res) {
  res.render('one-more-time', { title: 'And another!' });
});

module.exports = router;
