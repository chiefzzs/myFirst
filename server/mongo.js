var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var conn ;
var ObjectId = require('mongodb').ObjectId


MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    
    conn = dbo.collection("test_set") 
    console.log("mongo init ...",conn)
});

module.exports.conn = conn ;

module.exports = {
    
    query:function(filter,cb,err){         
         conn.find(filter).toArray(function(errs, result) { // 返回集合中所有数据
            if (errs)  {
                err(errs)
            }else{
                cb(result)
            }                         
        });
    },
    insert:function(data,cb,err){
        conn.insert(data,function(errs, result) { // 返回集合中所有数据
           if (errs)  {
               err(errs)
           }else{
               cb(result)
           }                         
       });
   },
   update:function(filter,data,cb,err){
    filter._id = ObjectId(filter._id)
    if(data._id){        
        delete  data._id 
    }
    var set = {$set:data}
    conn.updateOne(filter,set,function(errs, result) { // 返回集合中所有数据
       if (errs)  {
           err(errs)
       }else{
           cb(result)
       }                         
   });
},
delete_one:function(filter,cb,err){
    filter._id = ObjectId(filter._id)
    conn.deleteOne(filter,function(errs, result) { // 返回集合中所有数据
       if (errs)  {
           err(errs)
       }else{
           cb(result)
       }                         
   });
},



}