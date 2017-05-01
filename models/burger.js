var orm = require("../config/orm.js");
console.log("Burger Models Operational");

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(result) {
            callback(result);
        });
    },

    insertOne: function(vals, callback) {
        orm.insertOne("burgers", "burger_name", vals, function(result) {
            console.log("Trying to callback function in models");
            callback(result);
        });
    },

    updateOne: function(colName, newName, colId, pageId, callback) {
        orm.updateOne("burgers", colName, newName, colId, pageId, function(result) {
            callback(result);
        });
    }
};

module.exports = burger;