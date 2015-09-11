var express = require('express');
var router = express.Router();

router.get('/superheros', function(req, res, next) {
  res.render('api', { title: 'Superhero API' });
});

module.exports = router;
