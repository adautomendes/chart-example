var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { });
});

router.get('/getValues', function (req, res, next) {
	let arr = [];
	for(let i = 0; i < 6; i++) {
		arr.push(Math.round(Math.random()*20));
	}

	res.json(arr);
});

module.exports = router;
