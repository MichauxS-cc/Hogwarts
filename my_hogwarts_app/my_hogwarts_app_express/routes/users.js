var express = require("express");
var router = express.Router();

var users = [
    {
        username: "Michaux Sun",
        firstname: "Michaux",
    },
];

/* GET users listing. */
router.get("/", function (req, res, next) {
    const username = req.params.username;

    res.send(users);
});

// router.post("/", function (req, res, next) {

// });

module.exports = router;
