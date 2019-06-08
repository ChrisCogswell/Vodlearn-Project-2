var express = require("express");

var PORT = process.env.PORT || 3000;

var db = require("./models");

var app = express();
var Handlebars=require("handlebars");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/controller.js");
var apiroutes=require("./routes/api-routes.js");
var dashboardroutes =require("./routes/dashboard-routes.js");
var loginroutes=require("./routes/login-routes.js");


app.use(routes);
app.use(apiroutes);
app.use(dashboardroutes);
app.use(loginroutes);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});


// 
Handlebars.registerHelper("equals", function(string1 ,string2, options) {
  if (string1 === string2) {
      return options.fn(this);
  } else {
      return options.inverse(this);
  }
});