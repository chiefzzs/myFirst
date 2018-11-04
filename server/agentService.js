var exec = require('child_process').exec;
var cmd = 'prince -v builds/pdf/book.html -o builds/pdf/book.pdf';



module.exports = {
    execCmd(cmd, errcb ,  stdcb  ){
        exec(cmd, function(error, stdout, stderr) {
            // 获取命令执行的输出
            if(error){
                console.log(error);
                return errcb(error)
            }

            stdcb(stdout,stderr)
          })
    },
    
}