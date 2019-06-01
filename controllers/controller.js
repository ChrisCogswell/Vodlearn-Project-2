var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
// var cat = require("../models/cat.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    res.render("index");
});

router.get("/dashboard/:username", function(req, res) {
    var userinfo={
        name:req.params.username
    }
    var quizinfo={
        quizlist:[
        {quizname:"Quiz 1" ,quizid:1},{quizname:"Quiz 2", quizid:2}
    ]};

    res.render("dashboard",quizinfo);
});

router.get("/quiz/:quizid", function(req, res) {
    var userinfo={
        name:req.params.username
    }
    var quizinfo={quizname: "Quiz 1" ,questionlist:[
        {question:"What is"},{question:"Who is"}
    ]};

    res.render("quiz",quizinfo);
});




// Export routes for server.js to use.
module.exports = router;