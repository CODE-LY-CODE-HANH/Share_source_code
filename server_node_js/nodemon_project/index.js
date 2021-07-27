var http = require("http"); // tham chiếu thư viện http

var server = http.createServer(function(req , res) {
    res.writeHead(200 , {"Content-Type" : "text/html"});
    res.write("code server nodejs with nodemon")
    res.end();
});

server.listen(8080 , function() {
    console.log("Server đang chạy trên cổng 8080")
});