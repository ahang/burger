console.log("Controller Operational");
var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    console.log(req.body);
    burger.newBurger([
        req.body.burger_name
    ], function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    console.log(req.body);
    console.log("The ID " + req.params.id);
    console.log("Value of Devoured " + req.body.devoured);
    burger.eaten(
        req.body.devoured, req.params.id.id, function() {
            res.redirect("/");
    });
});

module.exports = router;