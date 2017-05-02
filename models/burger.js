var orm = require("../config/orm.js");
console.log("Burger Models Operational");

var burger = {
    all: function(callback) {
        orm.selectAll("burgers", function(result) {
            callback(result);
        });
    },

    newBurger: function(vals, callback) {
        orm.insertOne("burgers", "burger_name", vals, function(result) {
            //console.log("Trying to callback function in models");
            callback(result);
        });
    },

    eaten: function(newInput, pageId, callback) {
        orm.updateOne("burgers", "devoured", newInput, "id", pageId, function(result) {
            callback(result);
        });
    }
};

module.exports = burger;