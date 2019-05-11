var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL || "mysql://svkf1jpttcneo6ck:zc44bs0iyvszjw3a@tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/hvtj77q35qt6t65x")
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Nordby2015',
    database: 'burgers_db'
  });
}

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected id: " + connection.threadId);
});

module.exports = connection;


