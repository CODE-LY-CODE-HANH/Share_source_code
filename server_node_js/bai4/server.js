// tham chiếu thư viện
var express = require("express");
// tham chiếu thư viện handlebars để dùng .hbs (template html)
var expressHbs = require("express-handlebars");

// tạo đối tượng mới
var app = express();
// Lắng nghe ỏ cổng 3000
app.listen(process.env.PORT || '3000');
// Điịnh nghĩa sử dụng hbs
app.engine('.hbs' , expressHbs() );
// Định nghĩa view sử dụng hbs (view là file hbs)
app.set('view engine' , '.hbs');

// Định nghĩa các trang
app.get('/' , (req , res)=>{
    res.send("Xin chào ")
});

app.get('/index' , (req , res)=>{
    // Đường dẫn là /index --> sẽ gọi đến file index.hbs
    res.render('index' , {layout : false})
});

app.get('/tho' , (req , res)=>{
    // Đường dẫn là /tho --> sẽ gọi đến file tho.hbs
    res.render('tho' , {layout : false})
});