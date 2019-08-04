//Require express
var express = require("express");

var app = express();

var path = require("path");



// Import burger model (burger.js) in order to use db functions defined in orm calls 
var burger = require("../models/burger.js");

// Create all routes and set up logic within those routes where required.(api routes)

// Creating Route for index page (html routes) 

  app.get("/", function(req, res) {
    res.render("index", burger.selectAll);
  });


module.exports = app;
