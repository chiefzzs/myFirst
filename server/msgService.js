var redis = require("redis"); 
var redisFlag = false 

/*
    功能： 订阅  channel ；有消息回调处理。。。。

*/

module.exports = {
    //channel
        
    init(subcb,msgcb){
        var  client = redis.createClient(6379, '127.0.0.1', {connect_timeout: 100});
        console.log("redis" ,client)

        client.on("ready", function () {
        //订阅消息    
            console.log("read。。。");
            subcb(client)
        });

        client.on("error", function (error) {
                console.log("Redis Error " + error);                
        });

        //收到消息后执行回调，message是redis发布的消息
        let thePub = this.pub
        client.on("message", function (channel, message) {
            console.log("我接收到信息了" + message);
            msgcb(message,function(channel,pubmsg){
                thePub(client,channel, pubmsg)
            });
        });

        return client
    }, 
    pub(client,channel,msg){
        client.publish(channel,msg)
    },
    sub :function(channel,msgcb,readcb) {        
        let thePub = this.pub

        var channel = channel || 'roban:test:channel';                              
           this.init(function(client){                
                client.subscribe(channel,function(e){
                    console.log('starting subscribe channel-2:' )                                       
                },function(s){
                    console.log('starting subscribe channel-1:' )
                    if(readcb){
                        readcb(function(ch,pubmsg){
                            thePub(client,ch, pubmsg)
                        });                
                    }
                    
                })},msgcb);      
    }            
}
