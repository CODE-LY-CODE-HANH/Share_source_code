// Tham Chiếu thư viện
var mysql = require('mysql')
// Lấy thông tin kết nối
var connect = mysql.createConnection({
    host : '37.59.55.185',
    user : 'JnWiETIzRg',
    password : '47tKHpVqR3',
    port : 3306,
    database : 'JnWiETIzRg'
});
// Kết nối đến Database và thêm dữ liệu (insert data)
connect.connect((error)=>{
    if( error ){
        console.log(error)
    } else {
        console.log(" Kết nối thành công ")
        // khai báo sql insert
        var sql = "INSERT INTO `customer`(`id`, `name`, `address`, `phone`) VALUES (null , 'Nguyen Van F' , 'Ha Noi' , '0987654321' )";
        // thực hiện insert
        connect.query(sql , (err , result)=>{
            if(err){
                console.log(err);
            } else {
                console.log(result);
                console.log("Thêm dữ liệu thành công");
            }
        });
    }
});
