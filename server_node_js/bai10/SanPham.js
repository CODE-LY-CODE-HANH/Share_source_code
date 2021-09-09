const mongoose = require('mongoose');

const url = "mongodb+srv://minh2408:NBYwESdqItdboEeS@cluster0.i92og.mongodb.net/bai8?retryWrites=true&w=majority";

mongoose.connect(url , {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Kết nối thành công !");
}).catch((err)=>{
    throw err;
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SanPhamSchema = new Schema({
    tenSP : { type: String, default: 'hahaha' },
    soLuong : {type : Number}
});

module.exports = mongoose.model('SanPham', SanPhamSchema);