var express = require("express");
var router = express.Router();

var getQuizController = require("../controllers/getQuizControllers");


router.post("/tentativa", function (req, res) {
    getQuizController.tentativa(req, res);
});

module.exports = router;
