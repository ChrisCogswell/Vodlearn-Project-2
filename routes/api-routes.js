var express = require("express");
var router = express.Router();
var user;
var idToken;
var session;
const request=require('request');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
var jwt = require('jsonwebtoken');
var jwkToPem = require('jwk-to-pem');
global.fetch = require('node-fetch');
const pool_region = 'us-east-1';
var poolData = { UserPoolId : 'us-east-2_vq6Vzx6C2',
ClientId : '5cq5r66nb5dqqgffau4g102hvo'
};

router.post('/signup', (req,res)=>{

    console.log(req.body);
   
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
        user=result.user;
        console.log('user name is ' + cognitoUser.getUsername());
        res.redirect('/');
    
    });
    
    
    
    })
    
    router.post('/login', (req,res)=>{
        var authenticationData = {
            Username : req.body.username,
            Password : req.body.password,
        };
        var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
        var poolData = { UserPoolId : 'us-east-2_vq6Vzx6C2',
            ClientId : '5cq5r66nb5dqqgffau4g102hvo'
        };
        var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    Session();
        var userData = {
            Username : req.body.username,
            Pool : userPool
        };
        var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
                var accessToken = result.getAccessToken().getJwtToken();
                user=cognitoUser;
                /* Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer*/
                 idToken = result.idToken.jwtToken;
                res.redirect('/dashboard/'+cognitoUser.getUsername());
            },
    
            onFailure: function(err) {
                console.log(err);
            },
    
        });


});
router.use('/dashboard/',isAuthenticated);
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


module.exports = router;


//This is probably insecure. Rewrite using tokens
function isAuthenticated(req, res,next){
console.log("Middleware");

if(ValidateToken(idToken)){
    console.log("Success");
next();
}
else{
    console.log("Failure to Authenticate Token");
    res.redirect("/")
}

}


function ValidateToken(token) {
    //TODO Needs to actually validate token
    return true;
}



