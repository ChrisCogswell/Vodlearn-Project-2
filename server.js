require("dotenv").config();

var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

var Handlebars=require("handlebars");


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// var routes = require("./controllers/controller.js");
// var apiroutes=require("./routes/api-routes.js");
// require("./routes/html-routes.js")(app);
// require("./routes/api-routes")(app);



// app.use(routes);
// app.use(apiroutes);
var htmlroutes = require("./routes/html-routes.js");
var apiroutes=require("./routes/api-routes.js");
var dashboardroutes =require("./routes/dashboard-routes.js");
var loginroutes=require("./routes/login-routes.js");


app.use(htmlroutes);
app.use(apiroutes);
app.use(dashboardroutes);
app.use(loginroutes);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;

// 
Handlebars.registerHelper("equals", function(string1 ,string2, options) {
  if (string1 === string2) {
      return options.fn(this);
  } else {
      return options.inverse(this);
  }
});
