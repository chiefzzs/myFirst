//service.js
import Vue from 'vue'

export default {
     baseurl:"/apis/demo/cgi/db/db.py",
     err:function(req){
         console.log("err",req)
     },
     gets:function(table,cb,err){         
         let filter="{\"table\":\""+table+"\"}"
         if(!err){
            err=this.err
         }

         Vue.http.get(this.baseurl,{
             params:{
                op:"query",
                filter:filter,
             }
         }).then((res) => {
            cb(res.data);
            
        } ,(res) => {
            err(res)
        }) 
     },
     add:function(table,data,cb,err){         
        data["table"] =table 

        if(!err){
           err=this.err
        }

        Vue.http.get(this.baseurl,{
            params:{
               op:"add",
               data:JSON.stringify(data),
            }
        }).then((res) => {
           cb(res.data);
           
       } ,(res) => {
           err(res)
       }) 
    },update:function(table,id_name,value,data,cb,err){         
        let filter={
            "table":table,            
        }
        filter[id_name] = value

        if(!err){
           err=this.err
        }

        Vue.http.get(this.baseurl,{
            params:{
               op:"add",
               filter:JSON.stringify(filter),
               data:JSON.stringify(data),
            }
        }).then((res) => {
           cb(res.data);
           
       } ,(res) => {
           err(res)
       }) 
    },delete:function(table,id_name,value,cb,err){         
        let filter={
            "table":table,            
        }
        filter[id_name] = value

        if(!err){
           err=this.err
        }

        Vue.http.get(this.baseurl,{
            params:{
               op:"delete_one",
               filter:JSON.stringify(filter),               
            }
        }).then((res) => {
           cb(res.data);
           
       } ,(res) => {
           err(res)
       }) 
    },
 }