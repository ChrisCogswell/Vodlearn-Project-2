var express = require("express");
var router = express.Router();
var db = require("../models");

// router.get("/quiz/:id", (req,res)=>{
// //Sequelize
// db.Question.findAll({where:{QuizId:req.params.id}}).then(function(results){
//     res.render("quiz-stage",{layout: false, view:"quiz-body", question:results});
//   })
// })

router.get("/quiz/:id", (req,res) => {

  db.Quiz.findAll({where:{id:req.params.id}}).then(function(results){
    res.render("quiz-stage",{layout: false, view:"quiz-header", quiz:results});
  })
})


module.exports = router;