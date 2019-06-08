var express = require("express");
var router = express.Router();

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

router.get("/settings", function(req, res) {
    var quizinfo={
        quizlist:[
        {quizname:"Quiz 1" ,quizid:1},{quizname:"Quiz 2", quizid:2}
    ]};


    res.render("dashboard-stage",{layout: false, view:"settings"});
});

router.get("/quizlist", function(req, res) {
    var quizinfo={
        quizlist:[
        {quizname:"Quiz 1" ,quizid:1},{quizname:"Quiz 2", quizid:2}
    ]};

    res.render("dashboard-stage",{layout: false, view:"quizlist"});
});

router.get("/addquiz", function(req, res) {


    res.render("dashboard-stage",{layout: false, view:"addquiz"});
});

module.exports = router;