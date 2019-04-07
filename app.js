var express = require('express');
var app = express();

var mysql = require("mysql");
//Database connection
app.use(function(req, res, next){
	global.connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : '',
		database : 'invman'
	});
    connection.connect();
	next();
});

inventory = require('./inventory.js');
app.use('/inventory',inventory);

app.listen(3003);