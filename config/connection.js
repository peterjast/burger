    
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Nordby2015',
    database: 'burgers_db'
})

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected id: " + connection.threadId);
});

module.exports = connection;


