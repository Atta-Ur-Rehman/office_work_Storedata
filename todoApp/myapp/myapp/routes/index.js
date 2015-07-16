var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs');
});
router.get('/todo', function (req, res) {
  res.render('todoApp.ejs');
});
module.exports = router;
