var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/api", function(req, res) {
    db.Quiz.findAll({}).then(function(dbQuiz) {
      console.log(dbQuiz);
      res.render(dbQuiz);
    });
  });
}