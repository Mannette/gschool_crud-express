var express = require('express');
var router = express.Router();

router.get('/superheros', function(req, res, next) {
  res.send('Just a test');
});

module.exports = router;
