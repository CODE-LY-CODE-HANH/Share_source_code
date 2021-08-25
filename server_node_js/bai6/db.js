var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://user2707:PF6LKT9FtXO2of6s@cluster0.yhi4n.mongodb.net/Lab6?retryWrites=true&w=majority";
var mongo = new MongoClient(url , { useNewUrlParser : true });

mongo.connect((err , db)=>{

});

mongo.col