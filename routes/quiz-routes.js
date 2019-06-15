

var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/quiz/:id", (req,res)=>{
//Sequelize
      db.Quiz.findOne({where:{id:req.params.id}}).then(function(quiz){
      db.Question.findAll({where:{QuizId:quiz.id}}).then(function(questions){
      
        res.render("quiz", {
          quiz_id:quiz.id,
          quiz_name: quiz.quiz_name,
          question: questions,
    
    });
  });
  });
});


router.post("/quiz/grade", (req,res)=>{


});

router.get("quiz/user/:id",(req,res)=>{
  res.render("quiz", {
    quiz_id:quiz.id,
    quiz_name: quiz.quiz_name,
    question: questions,

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