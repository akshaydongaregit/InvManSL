var express = require('express');
var router = express.Router();

router.get('/all', function(req, res, next) {
	connection.query('select * from items', function (error, results, fields) {
		if (error) throw error;
		res.json({"status": 200, "error": null, "response": results});
	});
});

router.get('/add', function(req, res, next) {
	res.json("Added Sucess");
});


module.exports = router;