

var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/quiz/:id", (req,res)=>{
//Sequelize
      // db.Quiz.findOne({where:{id:req.params.id}}).then(function(result1){
      // db.Question.findAll({where:{QuizId:req.params.id}}).then(function(result2){
      // db.Choice.findAll({where:{QuestionId:req.params.id}}).then(function(result3){ 
      //   res.render("quiz", {
      //     quiz: result1,
      //     question: result2,
      //     choice: result3
      // });
      db.Quiz.findOne({where:{id:req.params.id}}).then(function(quiz){
      db.Question.findAll({where:{QuizId:quiz.id}}).then(function(questions){
        db.Choice.findAll().then(function(choice) {

          
          res.render("quiz", {
            quiz_id:quiz.id,
            quiz_name: quiz.quiz_name,
            question: questions,
            choices: choice
        });
    });
  });
  });
});

router.get("/quiz/choices/:id", (req,res)=>{
  var quizarray=[];
 

// db.Question.findAll({where:{QuizId:req.params.id}}).then(function(questions){

// questions.forEach(function(question){
//   db.Choice.findAll({attributes: ['id', 'choice'], where:{QuestionId:question.id}}).then(function(choices){
//     quizarray.push(new QuizObject(question.id, choices))
//   })
// })



  db.Question.findAll({include:[{model:db.Choice}],where:{QuizId:req.params.id}}).then(function(questions){
    // questions.forEach(function(question){
    //   db.Choice.findAll({attributes: ['id', 'choice'], where:{QuestionId:question.id}}).then(function(choices){
    //     quizarray.push(new QuizObject(question.id, choices));
    //    })
res.json(questions);
  })
 });

module.exports = router; 



function QuizObject(id, choices){
  this.id=id
  this.choices=choices
}

// function loadQuizdata(resolve,reject){

//   db.Question.findAll({where:{QuizId:req.params.id}}).then(function(questions){

//     questions.forEach(function(question){
//       db.Choice.findAll({attributes: ['id', 'choice'], where:{QuestionId:question.id}}).then(function(choices){
//         quizarray.push(new QuizObject(question.id, choices))
//       })
//     })
//     resolve(quizarray);
//   });

// }
