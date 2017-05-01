console.log("Controller Operational");
var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    console.log(req.body);
    burger.insertOne([
        "burger_name"
    ], [
        req.body.burger_name
    ], function() {
        res.redirect("/");
    });
});

module.exports = router;