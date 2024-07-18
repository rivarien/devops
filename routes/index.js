var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Simple Application" });
});

router.get('/version', (req, res) => {
  res.send(process.env.npm_package_version || Date.now().toString());
});

module.exports = router;
