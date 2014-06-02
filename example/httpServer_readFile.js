var fs=require("fs");

require("http").createServer(function(req,res){
    //执行异步操作，非阻塞
    fs.readFile(__dirname+"/public/index.html",function(err,data){
        res.write(data);
        res.end();
    });
    res.write("<h3>it is me first!</h3> ");
}).listen(3000);


