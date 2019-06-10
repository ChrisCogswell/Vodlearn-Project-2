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
    db.Quiz.findAll({}).then(function(result) {
        res.render("dashboard-stage",{layout: false, view:"quizlist", quizlist:result});
            });
      });
  
router.get("/addquiz", function(req, res) {
    res.render("dashboard-stage",{layout: false, view:"addquiz"});
});

router.get("/addquiz/:id", function(req, res) {
    db.Quiz.findOne({where:{
        id: req.params.id
    }}).then(function(result){
        console.log(result);
       res.render("dashboard-stage",{layout: false, view:"addquiz", quiz_name: result.quiz_name}); 
    })
    
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