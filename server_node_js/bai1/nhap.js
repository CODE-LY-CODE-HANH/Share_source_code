let prompt = require('prompt-sync')( {sigint : true} );

// let name = prompt('ten ban la :  ');
// console.log("ten ban la : " + name);

const so1 = prompt("nhap so 1 : ")
const so2 = prompt("nhap so 2 : ")
const tong = Number(so1) + Number(so2)
console.log("tong : " + tong)