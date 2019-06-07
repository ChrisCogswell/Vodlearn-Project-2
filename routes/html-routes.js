var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Quiz_List.findAll({}).then(function(dbQuizList) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbQuizList
      });
    });
  });

  app.get("/dashboard", function(req, res) {
    db.Quiz_List.findAll({}).then(function(dbQuizList) {
      res.render("dashboard", {
        msg: "Welcome!",
        examples: dbQuizList
      });
    });
  });

  app.get("/quizmaker", function(req, res) {
    db.Quiz.findAll({}).then(function(dbQuiz) {
      res.render("quiz", {
        msg: "Welcome!",
        examples: dbQuiz
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Quiz.findOne({ where: { id: req.params.id } }).then(function(dbQuiz) {
      res.render("question", {
        example: dbQuiz
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};