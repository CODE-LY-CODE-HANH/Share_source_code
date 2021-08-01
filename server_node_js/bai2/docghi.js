var http = require("http");
var fs = require("fs");

http.createServer((req , res)=>{

    //doc file
    fs.readFile( "./a.html" , (error , data)=>{
        res.writeHead(200 , {"Content-Type" : "text/html"});
        res.write(data != null ? data : "ko co du lieu")
        return res.end();
    })
    // ghi file
    fs.writeFile("text.txt" , "ghi ra file moi nhe" , (error)=>{
        if(error){
            console.log(error)
        }
    })

}).listen(8080);