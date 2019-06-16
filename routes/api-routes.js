var express = require("express");
var router = express.Router();
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
global.fetch = require('node-fetch');
var db = require("../models");

  // Get all quizzes
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