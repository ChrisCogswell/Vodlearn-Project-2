var express = require("express");
var PORT = process.env.PORT || 3000;
var db = require("./models");
var app = express();
var Handlebars=require("handlebars");
var exphbs = require("express-handlebars");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var htmlroutes = require("./routes/html-routes.js");
var apiroutes=require("./routes/api-routes.js");
var dashboardroutes =require("./routes/dashboard-routes.js");
var quizroutes =require("./routes/quiz-routes.js");
var loginroutes=require("./routes/login-routes.js");

app.use(htmlroutes);
app.use(apiroutes);
app.use(dashboardroutes);
app.use(quizroutes);
app.use(loginroutes);

db.sequelize.sync({force:true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

Handlebars.registerHelper("equals", function(string1 ,string2, options) {
  if (string1 === string2) {
      return options.fn(this);
  } else {
      return options.inverse(this);
  }
});