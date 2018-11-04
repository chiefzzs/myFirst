/*
   实现消息到前台转发
     
*/
var ws = require("nodejs-websocket");

module.exports = {
    setting:{port:8010,callback={}},
    set_seting(setting){
        this.setting = setting
    },     
    start(){
        let theOnMessage = this.onMessage

        let theSettting = this.setting

        var server = ws.createServer(function(conn){
            //
            conn.on("text", function (str) {
                console.log("收到的信息为:"+str) 
                if(theSettting.callback && theSettting.callback.onMsg) {
                    theSettting.callback.onMsg(conn,str)
                }
            })

            conn.on("close", function (code, reason) {
                console.log("关闭连接")
                if(theSettting.callback && theSettting.callback.onClose) {
                    theSettting.callback.onClose(conn,code, reason)
                }

            });
            conn.on("error", function (code, reason) {
                console.log("异常关闭")
                if(theSettting.callback && theSettting.callback.onError) {
                    theSettting.callback.onError(conn,code, reason)
                }

            });

        }).listen(this.setting.port)

        console.log("WebSocket建立完毕")

    }
}