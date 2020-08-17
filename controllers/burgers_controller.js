const express = require("express");
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all routes and set up the logic within those routes where required.
router.get("/", (req, res) => {
    burger.all((data) => {
        const hbsObject = {
            burgers: data
        };
        //console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    console.log("inside /api/burgers");
    console.log("req from /api/burgers: ", req.body);
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], (result) => {
        res.json({ id: result.insertId});
    });
});

router.put("/api/burgers/:id", (req, res) => {
    const condition = "id = " + req.params.id;

    //console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, (result) => {
        if (result.chamgerdRows == 0) {
            return res.status(404).end();
        }else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", (req, res) => {
    const condition = "id = " + req.params.id;

    burger.delete(condition, (result) => {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        }else {
            res.status(200).end();
        }
    });
});

// Export routes for sever.js
module.exports = router; 
