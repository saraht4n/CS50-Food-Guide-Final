var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'Sa192001!',
    database:'restaurant'
});

connection.connect(err=>{
    if (err) throw err;
    console.log('Connected To DB');
});
module.exports = connection;