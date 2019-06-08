var express = require("express");
var router = express.Router();


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

module.exports=router;

function isAuthenticated(req, res,next){

    if(cognitoUser.getUsername()=req.params){
    next();
    }
    else{
        res.redirect("/")
    }
    
    }