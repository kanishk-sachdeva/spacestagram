var express = require('express');
const fetch = require('node-fetch');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  var count = 10;
  var nasaapi = "https://api.nasa.gov/planetary/apod?api_key=VIbJ8GNmkyw2DF4kMxVxVDcJbD2bLFdZPe82ySqq&thumbs=false&count=" + count;

  fetch(nasaapi)
    .then((response) => response.json())
    .then((data) => res.render('index', {data}))
    .catch((err) => console.log(err));
});

module.exports = router;
