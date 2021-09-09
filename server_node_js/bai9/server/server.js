const express = require('express');
const mysql = require('mysql');
const body_parser = require('body-parser');
const cors = require('cors');
const myConnection = require('express-myconnection');

dbOptions = {
    host: '37.59.55.185',
    user: 'JnWiETIzRg',
    password: '47tKHpVqR3',
    port: 3306,
    database: 'JnWiETIzRg'
};

const app = express();
app.use(body_parser.json() );
app.use(cors() );

app.use(myConnection(mysql, dbOptions, 'request') );
app.use(express.urlencoded({ extended: false }));

const port = 3000;
const ip = "192.168.1.11";

app.listen(port , ip , ()=>{
    console.log("Server Đang chạy http://" + ip +  ":" + port);
});

app.get('/' , (req , res)=>{
    req.getConnection((err, connection)=>{
        if(err) res.send(err);

        connection.query("select * from customer" , (err , rows)=>{
            if(err) res.send(err);

            res.send(rows);
        });
    });
});

app.post('/' , (req , res)=>{
    console.log(req.body);
    const data = {
        name : req.body.name,
        address : req.body.address,
        phone : req.body.phone,
    };
    
    req.getConnection((err, connection)=>{
        if(err) res.send(err);

        connection.query("insert into customer set ?" , data , (err , rows)=>{
            if(err) res.send(err);

            res.send({
                status : 'Thêm thành công',
                id : null,
                name : req.body.name,
                address : req.body.address,
                phone : req.body.phone,
            });
        });
    });
});