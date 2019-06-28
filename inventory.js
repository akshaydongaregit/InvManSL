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
  let query = 'insert into items(name,code,unit,quantity,price,descp,category) values($1,$2,$3,$4,$5,$6,$7)'
  let values = Object.values(req.body);
  console.log(JSON.stringify(values));
  
  var pool = db.getConnection();
  pool.query(query,values,function(err, data){
    console.log('err:'+JSON.stringify(err)+' data'+JSON.stringify(data));
	if(err!=undefined)
      res.json(err)
    else
      res.json(data);
  });

});

router.get("/delete/:id",function(req,res){
  let query = 'delete from items where id = $1'; //+req.params.id;
  let values = [req.params.id];
  console.log(JSON.stringify(values));

  var pool = db.getConnection();
  pool.query(query,values,function(err, data){
    console.log('err:'+JSON.stringify(err)+' data'+JSON.stringify(data));
    if(err!=undefined)
      res.json(err)
    else
      res.json(data);
  });
  
});


router.post("/update",function(req,res){
  let query = 'update items set  name=$1,code=$2,unit=$3,quantity=$4,price=$5,descp=$6,category=$7 where id = $8'
  let values = Object.values(req.body);
  console.log(values);

  var pool = db.getConnection();
  pool.query(query,values,function(err, data){
    if(err!=undefined)
      res.json(err)
    else
      res.json(data);
  });
  
});

module.exports = router ;
