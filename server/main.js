var express = require('express');
var app = express();
var mongo = require('./mongo');
 


function send(ret,res){
  console.log(ret)
  res.end( JSON.stringify( ret) );
}


app.get('/demo/cgi/db/db.py', function (req, res) {
  
    console.log(req.query.op)
    var ret = {}

    if( req.query.op == "add"){
        var datajson = JSON.parse(req.query.data)
        if(datajson.table){
          mongo.insert( datajson,function(data){
            ret =  {"msg": data.ops[0],"code":0 }
            send( ret ,res );
          },function (errs){
            ret = {"msg":"add error","code":errs}
            send( ret ,res );
          } )

        }else{
          ret = {"msg":"dot find table","code":-1}
          send( ret ,res );
        } 
       }

    if( req.query.op == "update"){
      var datajson = JSON.parse(req.query.data)
      var filterjson = JSON.parse(req.query.filter)
      if(filterjson.table){
         mongo.update(filterjson, datajson,function(data){
            ret =  {"msg":data,"code":0 }
            send( ret ,res );
          },function (errs){
            ret = {"msg":"update error","code":errs}
            send( ret ,res );
          } ) 
        }else{
          ret = {"msg":"dot find table","code":-1}
          send( ret ,res );
        } 
       }

    if( req.query.op == "delete_one"){
         var filterjson = JSON.parse(req.query.filter)
         if(filterjson.table){
          var data=  mongo.delete_one(filterjson,function(data){
            ret =  {"msg":data,"code":0 }
            send( ret ,res );
          },function (errs){
            ret = {"msg":"del error","code":errs}
            send( ret ,res );
          } ) 
        }else{
          ret = {"msg":"dot find table","code":-1}
          send( ret ,res );
        } 
       }

    if( req.query.op == "query"){
      var filterjson = JSON.parse(req.query.filter)
      if(filterjson.table){
          var data=  mongo.query(filterjson,function(data){
            ret =  {"msg":data,"code":0 }
            send( ret ,res );
          },function  (errs){
            ret = {"msg":"gets error","code":errs}
            send( ret ,res );
          } )                 
     }else{
       ret = {"msg":"dot find table","code":-1}
       send( ret ,res );
     } 
    }


   
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})