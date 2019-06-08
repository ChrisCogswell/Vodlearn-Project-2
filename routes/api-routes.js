var express = require("express");
var router = express.Router();
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
global.fetch = require('node-fetch');

router.post('/signup', (req,res)=>{

    console.log(req.body);
    var poolData = { UserPoolId : 'us-east-2_vq6Vzx6C2',
        ClientId : '5cq5r66nb5dqqgffau4g102hvo'
    };
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    
    var attributeList = [];
    
    var dataEmail = {
        Name : 'email',
        Value : req.body.email
    };
    var dataPhoneNumber = {
        Name : 'phone_number',
        Value : '+15555555555'
    };
    var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
    var attributePhoneNumber = new AmazonCognitoIdentity.CognitoUserAttribute(dataPhoneNumber);
    
    attributeList.push(attributeEmail);
    attributeList.push(attributePhoneNumber);
    
    userPool.signUp(req.body.name, req.body.password, attributeList, null, function(err, result){
        if (err) {
            try{
            console.log(err);}
            catch(err){
                console.log(err);
            }
            return;
        }
        cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
        res.redirect('/');
    
    });
    
    
    
    })
    
    
   




  // Get all examples
  router.get("/api/examples", function(req, res) {
    db.Quiz_List.findAll({}).then(function(dbQuizList) {
      res.json(dbQuizList);
    });
  });

  // Create a new example
  router.post("/api/examples", function(req, res) {
    db.Quiz_List.create(req.body).then(function(dbQuizList) {
      res.json(dbQuizList);
    });
  });

  // Delete an example by id
  router.delete("/api/examples/:id", function(req, res) {
    db.Quiz_List.destroy({ where: { id: req.params.id } }).then(function(dbQuizList) {
      res.json(dbQuizList);
    });
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




