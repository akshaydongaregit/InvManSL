var express = require("express");
var router = express.Router();
var db = require("./db");

router.get("/items",function(req,res){
  var pool = db.getConnection();
  pool.query("select * from items" , function(err,data){
    if(err!=undefined)
        res.json(err);
    else    
        res.json(data.rows);
        
  });
});

router.post("/add" , function(req,res){
  let query = 'insert into items values($1,$2,$3,$4,$5,$5,$6,$7,$8)'
  let values = Object.values(req.body);

  var pool = db.getConnection();
  pool.query(query,values,function(err, data){
    if(err!=undefined)
      res.json(err)
    else
      res.json(data);
  });

});

router.get("/delete",function(req,res){
  let query = 'delete from items where id = $1'
  let values = Object.values(req.query);
  console.log(req.query);

  var pool = db.getConnection();
  pool.query(query,values,function(err, data){
    if(err!=undefined)
      res.json(err)
    else
      res.json(data);
  });
  
});

module.exports = router ;
