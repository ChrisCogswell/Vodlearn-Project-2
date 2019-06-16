var express = require("express");
const dotenv = require('dotenv');
dotenv.config();
var router = express.Router();
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const AWS = require("aws-sdk");
global.fetch = require('node-fetch');
var db = require("../models");

  // Get all examples
  router.get("/api/examples", function(req, res) {
    db.Quiz.findAll({}).then(function(dbQuizList) {
      res.json(dbQuizList);
    });
  });

//ADD QUIZ USER
  router.post("/api/adduser",(req,res)=>{
    db.User.create({user_name:req.body.user_name,email:req.body.email, QuizId: req.body.QuizId}).then(function(results){
      res.json(results);
    });

  })

// CREATE QUIZ
  router.post("/api/addquiz", function(req, res) {
    db.Quiz.create({quiz_name:req.body.quiz_name}).then(function(results) {
      console.log("Success");
      console.log(req.body.questions);
      console.log(results);
      var questions=req.body.questions;
      questions.forEach(function(element){
        element.QuizId=results.id;
      });
      
      createQuestions(req.body.questions);

    });
  });

// DELETE QUIZ
  router.delete("/api/delete/:id", function(req, res) {
    db.Quiz.destroy({ where: { id: req.params.id } }).then(function(dbQuizList) {
      res.json(dbQuizList);
    });
  });

//UPDATE QUIZ
  router.put("/api/updatequiz/:id",function(req,res){
    db.Quiz.update({quiz_name:req.body.quiz_name},{where:{id:req.params.id}}).then(function(results){

 var questions=req.body.questions;
      questions.forEach(function(element){
      element.QuizId=req.params.id;
      createQuestions(req.body.questions);
      });
    
    

    });
   
  })

//ADD QUESTION TO QUIZ
    router.get("/api/addquiz/questions/:id",function(req,res){
      db.Question.findAll({where:{QuizId:req.params.id}}).then(function(results){
        res.json(results);
      })
    });


router.delete("/api/deletequiz/questions/:id",function(req,res){
  db.Question.destroy({ where: { id: req.params.id } }).then(function(result) {
    res.json(result);
  });
})




router.post("/api/sendinvite",function(req,res){

var inviteurl="www.vodlearn.com/quiz/user/"+req.body.userid;

console.log("www.vodlearn.com/quiz/user/"+req.body.userid)
db.User.findOne({where:{id:req.body.userid}}).then(function(result){

console.log("To "+result.email);




AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  region: process.env.AWSREGION
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });
const params = {
Destination: {
  ToAddresses: [result.email] // Email address/addresses that you want to send your email
},
// ConfigurationSetName: <<ConfigurationSetName>>,
Message: {
  Body: {
    Html: {
      // HTML Format of the email
      Charset: "UTF-8",
      Data:
        `<html><body><h1>You have been invited to take a quiz.</h1><p style='color:red'><a href="${inviteurl}">Take Quiz</a></p> <p>Time 1517831318946</p></body></html>`
    },
    Text: {
      Charset: "UTF-8",
      Data: "Hello Charith Sample description time 1517831318946"
    }
  },
  Subject: {
    Charset: "UTF-8",
    Data: "Quiz Invitation"
  }
},
Source: "invites@vodlearn.com"
};

const sendEmail = ses.sendEmail(params).promise();

sendEmail
.then(data => {
  console.log("email submitted to SES", data);
})
.catch(error => {
  console.log(error);
});



})



});


module.exports = router;

function createQuestions(questions, quizid){
questions.forEach(function(question){
db.Question.create({question:question.question, question_type: question.question_type, QuizId: question.QuizId}).then(function(results){
console.log(question);
  var choices=question.choices;
      choices.forEach(function(element){
        element.QuestionId=results.id;
      });


  db.Choice.bulkCreate(question.choices);
})
});

}