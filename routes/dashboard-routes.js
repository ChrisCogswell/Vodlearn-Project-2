var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/dashboard/:username", isAuthenticated, function(req, res) {
    var userinfo={
        name:req.params.username
    }
    console.log("Dashboard");
    res.render("dashboard");
});

router.get("/settings", function(req, res) {
  
    console.log("Settings");

    res.render("dashboard-stage",{layout: false, view:"settings"});
});

router.get("/quizlist", function(req, res) {
    db.Quiz_List.findAll({}).then(function(dbQuizList) {
        res.render("dashboard-stage",{layout: false, view:"quizlist", quizlist:dbQuizList});
            });
      });
  
router.get("/addquiz", function(req, res) {
    res.render("dashboard-stage",{layout: false, view:"addquiz"});
});

module.exports = router;

//TODO add authentication token check
function isAuthenticated(req, res,next){
    console.log("Checking Authentication");
        if(true){
        next();
        }
        else{
            res.redirect("/")
        }
        
        }