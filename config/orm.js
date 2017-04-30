var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput, callback) {
        var query = "SELECT * FROM ??";
        connection.query(query, [tableInput], function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    insertOne: function(table, cols, vals, callback) {
        var query = "INSERT INTO ??";

        query += " (";
        query += cols.toString();
        query += ") ";

    }
}