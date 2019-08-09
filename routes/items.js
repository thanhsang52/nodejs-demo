var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('items/dashboard',{title:'Dashboard page'});
  });
  router.get('/dashboard', function(req, res, next) {
    res.render('items/dashboard',{title:'Dashboard page'});
  });
router.get('/list', function(req, res, next) {
  res.render('items/list',{title:'Item list page'});
});
router.get('/add', function(req, res, next) {
    res.render('items/add',{title:'Item Add page'});
  });

module.exports = router;
