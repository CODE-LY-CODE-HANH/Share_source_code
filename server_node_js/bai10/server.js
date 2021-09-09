const express = require('express');
const SanPham = require('./SanPham');

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log("Server Đang chạy http://localhost:" + port);
});

app.get('/', (req, res) => {
    // insert
    // for (let index = 0; index < 10; index++) {
    //     const sp = new SanPham({tenSP : 'tao ' + String(index) , soLuong : index});
    //     sp.save().then(()=>{ console.log("Thêm dữ liệu thành công ... ") }).catch((err)=>{ throw err });

    // }
    // delete
    // SanPham.deleteMany({ } , (err)=>{
    //     if(err) throw err;

    //     console.log("Xóa toàn bộ bảng thành công !!!");
    // });

    // SanPham.deleteOne({ tenSP : 'tao 3'}, (err) => {
    //     if (err) throw err;

    //     console.log("Xóa toàn bộ bảng thành công !!!");
    // });
    // update
    // SanPham.updateMany({ tenSP : 'tao 1' }, { tenSP : 'tao 111111111111111' , soLuong : 111111 } , (err , res)=>{
    //     if(err) throw err;

    //     console.log("Cập nhật thành công <---- ");
    //     console.log(res);
    // });

    SanPham.find({}, null, {sort: {soLuong : -1}}, (err, docs) => {
        res.send(docs);
    });
});