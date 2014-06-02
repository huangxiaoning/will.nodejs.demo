var fs=require("fs");
var url=require("url");

require("http").createServer(function(req,res){
    //执行异步操作，非阻塞
    fs.readFile(__dirname+"/public/"+url.parse(req.url).path,'utf-8',function(err,data){
        if(err){
            res.end("<h1>404</h1>");
        }
        else{
            res.write("<meta charset=\"utf-8\">");
            res.end(data);
        }
    });
    res.write("<h3>The data is below!</h3> ");
}).listen(3000);


