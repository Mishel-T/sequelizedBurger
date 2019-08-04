//Require express -- why am I requiring express here??
var express = require("express");

var app = express();

var path = require("path");



// Import burger model (burger.js) in order to use db functions defined in orm calls 
var burger = require("../models");

// Create all routes and set up logic within those routes where required.(api routes)
module.exports = function (app) {

  // GET route for getting all of the posts
  app.get("/api/burgers", function (req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
    db.Burger.findAll({}).then(function (results) {
      // back to the user
      res.json(results);
      console.log(results)
    });
  });

  
  };

// Creating Route for index page (html routes) 

app.get("/", function (req, res) {
  res.render("index", burger.selectAll);
});


module.exports = app;
