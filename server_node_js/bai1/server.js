var http = require("http"); // tham chiếu thư viện http
var ham = require("./ham");

var server = http.createServer(function(req , res) {
    res.writeHead(200 , {"Content-Type" : "text/html"});
    
    res.write("<center> <h1> hello world ! </h1> </center>");
    res.write("Cong :  " + ham.cong( 1, 2) + "</br>" )
    res.write("Tru :  " + ham.tru( 1, 2) + "</br>")
    res.write("Nhan :  " + ham.nhan( 1, 2) + "</br>")
    res.write("Chia :  " + ham.chia( 1, 2) + "</br>")

    res.end("<h1> . </h1>");
});

server.listen(8080 , function() {
    console.log("Server đang chạy trên cổng 8080")
});