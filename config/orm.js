var connection = require("../config/connection.js");
console.log("ORM Config Operational");

var orm = {
    selectAll: function(tableInput, callback) {
        var query = "SELECT * FROM ??";
        connection.query(query, [tableInput], function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
            console.log("Select All Completed");
        });
    },
    insertOne: function(tableInput, colName, vals, callback) {
        var query = "INSERT INTO ?? ( ?? ) VALUES (?)";
        connection.query(query, [tableInput, colName, vals], function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
            console.log("Insert One completed");
        });
    },
    updateOne: function(tableInput, colName, newName, colId, pageId, callback) {
        var query = "UPDATE ?? SET ?? = ? WHERE ?? = ??"
        connection.query(query, [tablueInput, colName, newName, colId, pageId], function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
            console.log("Successfully modified name");
        });
    }
};

module.exports = orm;


