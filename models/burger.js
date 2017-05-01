var orm = require("../config/orm.js");
console.log("Burger Models Operational");

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(result) {
            callback(result);
        });
    },

    insertOne: function(colName, vals, callback) {
        orm.insertOne("burgers", "colName", "vals", function(result) {
            callback(result);
        });
    },

    updateOne: function(colName, newName, colId, pageId, callback) {
        orm.updateOne("burgers", colName, newName, colId, pageId, function(result) {
            callback(result);
        });
    }
};

module.export = burger;