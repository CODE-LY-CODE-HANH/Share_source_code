// Tham chiếu thư viện
var MongoClient = require('mongodb').MongoClient;
// link kết nối đến database
var url = "mongodb+srv://minh2408:NBYwESdqItdboEeS@cluster0.i92og.mongodb.net/bai8?retryWrites=true&w=majority";
// tạo đối tượng và truyền dữ liệu qua url
var mongo = new MongoClient(url, { useNewUrlParser: true });
// Kết nối đến Database
mongo.connect((err, db) => {
    if (err) throw err;

    console.log("Kết nối thành công");

    // chọn database để sử dụng
    var dbo = db.db("bai8");
    // tạo bảng  dữ liệu trong database
    // dbo.createCollection("person" , (err , res)=>{
    //     if (err) throw err;

    //     console.log("Tạo bảng thành công");
    // });

    var obj = { name: 'Nguyen Van Z', age: 21 };
    // Thực hiện insert obj vào bảng person
    // dbo.collection("person").insertOne(obj , (err , result)=>{
    //     if(err) throw err;

    //     console.log("Thêm thành công");
    //     console.log(result);
    //     db.close();
    // });
    // Lấy dữ liệu trong bảng person
    // dbo.collection("person").find().toArray((err , objs)=>{
    //     if(err) throw err;

    //     if(objs.length != 0) console.log("Lấy dữ liệu thành công ..... ");
    //     console.log(objs);
    //     db.close();
    // });
    // Xóa dữ liệu trong bảng person
    // var query = { name : "Nguyen Van B" }
    // // Thực hiện xóa 1 dòng
    // dbo.collection("person").deleteOne(query , (err , objs)=>{
    //     if(err) throw err;

    //     if(objs.length != 0 ) console.log("Xóa thành công ");
    //     console.log(objs);
    //     db.close();
    // });
    // Update dòng đầu tiên tìm thấy
    // var oldValue = { name: "Nguyen Van C" };
    // var newValue = {
    //     $set: { name: 'Nguyen Van D', age: 22 }
    // };
    // //
    // dbo.collection("person").updateOne(oldValue, newValue, (err, objs) => {
    //     if (err) throw err;

    //     if (objs.length != 0) console.log("Cập nhật thành công ");
    //     console.log(objs);
    //     db.close();
    // });
    // Sắp xếp dữ liệu
    // var query = { name : -1 }
    // //
    // dbo.collection("person").find().sort(query).toArray((err , objs)=>{
    //     if (err) throw err;

    //     if (objs.length != 0) console.log("Sắp xếp thành công ");
    //     console.log(objs);
    //     db.close();
    // });

    // Tìm kiếm
    var query = { name : "Nguyen Van N" };
    //
    dbo.collection("person").find(query).toArray((err , objs)=>{
        if(err) throw err;

        if(objs.length != 0){
            console.log("Tìm Thấy ... ");
            console.log(objs);
        } else{
            console.log("không Tìm Thấy ... ");
            console.log(objs);
        }
        db.close();

    });

});