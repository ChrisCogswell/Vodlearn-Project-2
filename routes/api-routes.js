var express = require("express");
var router = express.Router();
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
global.fetch = require('node-fetch');
var db = require("../models");

  // Get all examples
  router.get("/api/examples", function(req, res) {
    db.Quiz.findAll({}).then(function(dbQuizList) {
      res.json(dbQuizList);
    });
  });

  // Create a new example
  router.post("/api/addquiz", function(req, res) {
    db.Quiz.create({quiz_name:req.body.quiz_name}).then(function(results) {
      res.json(results);
    });
  });

  // Delete an example by id
  router.delete("/api/examples/:id", function(req, res) {
    db.Quiz.destroy({ where: { id: req.params.id } }).then(function(dbQuizList) {
      res.json(dbQuizList);
    });
  });


    // Create a new example
    router.post("/api/addquestion", function(req, res) {
      db.Question.create({question_name:req.body.question_name}).then(function(results) {
        res.json(results);
      });
    });

module.exports = router;




