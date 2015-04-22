var express = require('express');
var router = express.Router();

var response = require('module/response');

/* GET home page. */
router.get('/', function(req, res, next) {
  response.status = 200;
  response.content = "rererer";
  res.send(200, {"message": "ok"});
});

module.exports = router;
