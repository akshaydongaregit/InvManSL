
// var express = require('express');
// var app = express();

// app.get('/',function(req,res){
//     res.send('Hello World!');
// });

// var things = require('./things.js');
// app.use('/things',things);

// app.listen(3000);

var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());

//Require the Router we defined in movies.js
var movies = require('./movies.js');

//Use the Router on the sub route /movies
app.use('/movies', movies);

app.listen(3000);
