var express = require("express");
var app = express();

var PORT = process.env.PORT || 8080;

// Requiring models for syncing
var db = require("./models");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Importing routes and giving server access to them
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start server to listen to client requests
db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});