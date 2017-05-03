//Setting up MySQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "m5J5V77YhJgu",
    database: "burgers_db"
});

//Establishing connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//Exporting connection
module.exports = connection;