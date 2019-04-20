var express = require("express");
var router = express.Router();
var db = require("./db");

router.get("/listItems",function(req,res){
  var pool = db.getConnection();
  pool.query("select * from items" , function(err,data){
    if(err!=undefined)
        res.json(err);
    else    
        res.json(data.rows);
        
  });
});

module.exports = router ;