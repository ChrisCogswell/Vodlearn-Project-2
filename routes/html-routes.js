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

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Quiz_List.findOne({ where: { id: req.params.id } }).then(function(dbQuizList) {
      res.render("quiz", {
        example: dbQuizList
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};