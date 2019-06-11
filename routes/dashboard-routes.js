var express = require("express");
var router = express.Router();
var db = require("../models");
var region="us-east-2";
var requestify=require("requestify");

router.get("/dashboard/:username", function(req, res) {
    var userinfo={
        name:req.params.usernam
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
function isAuthenticated(req,res,next){

var jwt = require('jsonwebtoken');
var jwkToPem = require('jwk-to-pem');
var pem = getPem();
jwt.verify(sessionStorage.getItem("idToken"), pem, { algorithms: ['RS256'] }, function(err, decodedToken) {
}).then(function(result){
    console.log("Checking Authentication");
    console.log(result);
    next();
}); 

        }


        function getPem() {
            var userPoolId = 'us-east-2_vq6Vzx6C2'
            const jwkUrl = `https://cognito-idp.${region}.amazonaws.com/${userPoolId}/.well-known/jwks.json`;
          
            return requestify.request(jwkUrl, { method: 'get', dataType: 'json'})
              .then(res => res.getBody()['keys'].shift())
              .then(jwk => jwkToPem(jwk))
            ;
          }

