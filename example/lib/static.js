/**
 * Created by will on 6/2/14.
 */
var url = require("url"),
    fs = require("fs");

// 把URL转换成资源路径
module.exports = function static(parent_path){

    return function(req,res,next){  // 这个插件无需调用next。
        var path = url2path(req.url);
        function callback(err,data){
            if(err){
                res.statusCode = 404;
            }
            else
                res.write(data);
            res.end();
        }
        fs.readFile(parent_path+url.parse(req.url).path,callback);
    }
}