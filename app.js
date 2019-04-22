var express = require("express");
var app = express();
var cors = require("cors");

app.use(cors());
app.use(express.json());

var inventory = require("./inventory");
app.use("/inventory",inventory);

app.listen(process.env.PORT || 3000,function(){
    console.log("application started on port : "+3000);
});