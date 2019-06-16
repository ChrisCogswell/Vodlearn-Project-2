

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
  var choices=[];
  var correct=0;
  req.body.results.forEach(function(element){
    choices.push(element.choiceid)
                                            })
  db.Choice.findAll({where:{id:choices}}).then(function(results){
    results.forEach(function(choice){
      if(choice.correct){
        correct++;
                        }
                                    });
    var score=(correct/results.length)*100;
   db.User.update({attempts:1, score:score},{where:{id:req.body.user}}).then(function(){
      res.json({results:(correct/results.length)});
  })

})
});



router.get("/quiz/user/:id",(req,res)=>{

  db.Quiz.findOne({include:[{model:db.User, where:{id:req.params.id}},{model:db.Question}]}).then(function(result){
    res.render("quiz", {
    userid:result.Users[0].id,
    quiz_id:result.id,
    quiz_name: result.quiz_name,
    question: result.Questions,
                      });

                                              });
                                      });

router.get("/quiz/choices/:id", (req,res)=>{
  var quizarray=[];

  db.Question.findAll({include:[{model:db.Choice}],where:{QuizId:req.params.id}}).then(function(questions){
  
    res.json(questions);
  })
 });

module.exports = router; 



function QuizObject(id, choices){
  this.id=id
  this.choices=choices
}

