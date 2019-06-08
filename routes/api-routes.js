var express = require("express");
var router = express.Router();
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
global.fetch = require('node-fetch');


  // Get all examples
  router.get("/api/examples", function(req, res) {
    db.Quiz_List.findAll({}).then(function(dbQuizList) {
      res.json(dbQuizList);
    });
  });

  // Create a new example
  router.post("/api/examples", function(req, res) {
    db.Quiz_List.create(req.body).then(function(dbQuizList) {
      res.json(dbQuizList);
    });
  });

  // Delete an example by id
  router.delete("/api/examples/:id", function(req, res) {
    db.Quiz_List.destroy({ where: { id: req.params.id } }).then(function(dbQuizList) {
      res.json(dbQuizList);
    });
  });


module.exports = router;




