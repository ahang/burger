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
    //console.log(req.params.burger_name);
    console.log(req.body.burger);
    burger.newBurger([
        req.body.burger
    ], function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    console.log(req.body);
    console.log("The ID " + req.params.id);
    console.log("Value of Devoured " + req.body.devoured);
    burger.eaten(
        req.body.devoured, req.params.id, function() {
            res.redirect("/");
    });
});

module.exports = router;