var express = require('express');
var router = express.Router();
/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});
//router.get('/home', function(req, res, next) {
//  res.render('home', { title: 'Express' });
//});

router.get('/', function(req, res, next) {

  res.render('index.ejs');
});

router.get('/fruit', function (req, res, next) {
  console.log("Pakistan");
  //var data ={
  //  data : 'pakistan'
  //};
  //var fruitdata =JSON.stringify(data)
  //console.log(req.body);
  res.render('fruits.ejs');

});
router.get('/sport',function(req,res,next){
  res.render('sports.ejs');
});
router.get('/bakery',function(req,res,next){
  res.render('bakery.ejs');
});
router.get('/client',function(req,res){
  res.render('clientlist.ejs');
})

var array=[];
router.post("/addNewProduct", function(req, res){
    array.push(req.body)

  //req.pipe(array)
  console.log(array);
 // res.render(array)
  res.send(array);
});
router.get("/getData", function (req,res) {
console.log(array);
  res.send(array);
});

//router.post("/addNewProducts", function(req, res){
//  console.log(req.body);
//  res.send({status : true});
//});
//
//router.post("/addNewBProducts", function(req, res){
//  console.log(req.body);
//  res.send({status : true});
//});

module.exports = router;
