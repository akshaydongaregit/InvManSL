var express = require("express");
var app = express();

var inventory = require("./inventory");
app.use("/inventory",inventory);

app.listen(5000,function(){
    console.log("application started on port : "+5000);
});