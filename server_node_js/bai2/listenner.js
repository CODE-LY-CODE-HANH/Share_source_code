// npm install express
// npm install body-parser
let express = require("express");
let bodyParser = require("body-parser");
let app = express(); // tạo đối tượng mới express
// sử dụng bodeyParser
app.use(bodyParser.urlencoded({extended : true}));
// doc du lieu tu post
app.post("/input" , (req , res)=>{
    res.send("Ban vua gui den :  " + req.body.ho + "   " + req.body.ten )
});

let port = 8080;

app.listen(8080 , ()=>{
    console.log("Server 8080");
})