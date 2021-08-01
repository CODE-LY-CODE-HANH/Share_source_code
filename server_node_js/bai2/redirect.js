var http = require("http");
var fs = require("fs");

http.createServer((req , res)=>{

    if ( req.url == "/a.html" ) {
        res.writeHead( 301 , {"Location" : "http://" + req.headers['host'] + "/b.html"});
        return res.end();
    } else {
        fs.readFile( req.url.substring(1), (error , data)=>{
            res.writeHead(200 , {"Content-Type" : "text/html"});
            res.write(data != null ? data : "day la du lieu nha");
            return res.end();
        } )
    }

}).listen(8080);