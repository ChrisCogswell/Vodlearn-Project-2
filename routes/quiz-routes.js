var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/quiz/:id", (req,res)=>{
//Sequelize
      db.Quiz.findAll({where:{id:req.params.id}}).then(function(result1){
      db.Question.findAll({where:{QuizId:req.params.id}}).then(function(result2){
      db.Choice.findAll({where:{QuestionId:req.params.id}}).then(function(result3){ 
        res.render("quiz", {
          quiz: result1,
          question: result2,
          choice: result3
      });
    });
  });
  });
});

// router.get("/quiz/:id", (req,res) => {

//   db.Quiz.findAll({where:{id:req.params.id}}).then(function(results){
//     res.render("quiz-stage",{layout: false, view:"quiz-header", quiz:results});
//   })
// })


module.exports = router;



