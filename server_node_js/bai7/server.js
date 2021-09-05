const express = require('express'),
mysql = require('mysql'), // node-mysql module
myConnection = require('express-myconnection'); // express-myconnection module

dbOptions = {
    host: '37.59.55.185',
    user: 'JnWiETIzRg',
    password: '47tKHpVqR3',
    port: 3306,
    database: 'JnWiETIzRg'
};

const app = express();

app.use(myConnection(mysql, dbOptions, 'request') );
const port = 3000;

app.listen(port , ()=>{
    console.log("Server Đang chạy http://localhost:" + port);
});

app.get('/' , (req , res)=>{
    req.getConnection((err, connection)=>{
        if(err) res.json(err);
        const id = 4;
        // const data = {
        //     name : 'ten moi'
        // };
        // console.log(data);
        connection.query("DELETE FROM `Persons` WHERE Personid = ?", [ id] , (err2 , rows)=>{
            if(err2) res.json(err2);

            res.send('cap nhat thanh cong' );
        });
    });
});