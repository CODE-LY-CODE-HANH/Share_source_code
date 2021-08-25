// npm install mongodb --save
// Tham chiếu thư viện
var MongoClient = require('mongodb').MongoClient;
// link kết nối đến database
var url = "mongodb+srv://user2707:PF6LKT9FtXO2of6s@cluster0.yhi4n.mongodb.net/Lab6?retryWrites=true&w=majority";
// tạo đối tượng và truyền dữ liệu qua url
var mongo = new MongoClient(url , { useNewUrlParser : true });
// Kết nối đến Database
mongo.connect((err , db)=>{
    if(err){
        console.log("Error : \n");
        console.log(err);
    }else{
        console.log("Connected ---> Kết nối thành công !!!!!!!!! ");
        // chọn database để sử dụng
        var dbo = db.db("Lab6");
        // tạo bảng  dữ liệu trong database
        // dbo.createCollection("KhachHang" , (err , res)=>{
        //     if(err){
        //         console.log("Lỗi tạo bảng \n");
        //         console.log(err);
        //     } else{
        //         console.log("\nTạo bảng thành công ||| <---------- \n")
        //     }
        // });
        // tạo đối tượng dòng
        var obj = { name : "Nguyen Van D" , address : "Ha Noi -- Viet Nam"};
        // Thực hiện insert obj vào bảng dữ liệu
        var collection = dbo.collection("KhachHang").insertOne(obj , (err , result)=>{
            if(err){
                console.log("Lỗi thêm dữ liệu \n");
                console.log(err);
            } else{
                console.log("Insert Thành công !!!!!!!!!! \n");
                console.log(result);
                db.close();
            }
        });
    }
});