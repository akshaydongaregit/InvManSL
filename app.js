var express = require("express");
var app = express();

var inventory = require("./inventory");
app.use("/inventory",inventory);

app.listen(process.env.PORT || 3000,function(){
    console.log("application started on port : "+3000);
});