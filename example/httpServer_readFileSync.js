var fs=require("fs");

require("http").createServer(function(req,res){
    //执行异步操作，非阻塞
   var data= fs.readFileSync(__dirname+"/public/index.html");
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write(data);
    res.write("<h3>it is me last!</h3> ");
    res.end();
}).listen(3000);


