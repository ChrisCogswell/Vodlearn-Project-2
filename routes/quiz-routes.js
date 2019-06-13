var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/quiz/:id", (req,res)=>{
//Sequelize
db.Question.findAll({where:{QuizId:req.params.id}}).then(function(results){
    res.render("quiz", {question:results});
  })

    
})


module.exports = router;