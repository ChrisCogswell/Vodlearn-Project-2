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
    
    userPool.signUp(req.body.username, req.body.password, attributeList, null, function(err, result){
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
    var userData = {
        Username : req.body.username,
        Pool : userPool
    };
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            var accessToken = result.getAccessToken().getJwtToken();
            
            /* Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer*/
            var idToken = result.idToken.jwtToken;
            res.redirect('/dashboard/'+cognitoUser.getUsername());
        },

        onFailure: function(err) {
            console.log(err);
        },

    });

    
});
//  Render 404 page for any unmatched routes
  router.get("*", function(req, res) {
    res.render("404");
  });


module.exports=router;
