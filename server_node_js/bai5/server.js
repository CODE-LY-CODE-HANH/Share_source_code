// tham chiếu thư viện
var express = require("express");
// tham chiếu thư viện handlebars để dùng .hbs (template html)
var expressHbs = require("express-handlebars");
// tham chiếu multer
var multer = require("multer");
// tạo đối tượng express
var app = express()
// Định nghĩa nơi lưu trữ , cách lấy file
var storage = multer.diskStorage({
    destination : (req , file , res)=>{
        res(null , './upload')
    },
    filename : (req , file , res)=>{
        res(null , file.originalname )
    }
});
// khai báo đối tượng multer
// lưu trữ trên máy tính với 2 tham số định nghĩa ở trên destination , filename
var upload = multer({ storage : storage });
// gọi đến trang upload
app.get('/upload' , (req , res)=>{
    res.render('upload' , {layout : false });
});
// Lấy file và upload lên thư mục upload
app.post('/upload' , upload.single("tenfile") , (req , res)=>{
    console.log(req.file);
    res.send("Upload file Thành Công ! ")
} );
// chạy server tại cổng 3000
app.listen(process.env.PORT || '3000');
// điều hướng về file index sau khi upload xong
app.engine('.hbs' , expressHbs() );
app.set('view engine' , '.hbs');

app.get( '/index' , (req , res)=>{
    res.render('index' , {layout : false});
});

app.get('/' , (req , res)=>{
    res.send("Đây là trang chủ")
});