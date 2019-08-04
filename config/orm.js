//Importing connection to mySQL
var connection = require("../config/connection.js");


var orm = {
    // Select All to display all burgers added to the db - selecting all burgers in db to display to html
    selectAll: function(tableInput) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [tableInput], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },

    //insertOne to allow the user to add a new burger to the list - INSERT INTO tableInput(??) (burger_name(??) VALUES ?
    insertOne: function(tableInput, colName, burgerName) {
      var queryString = "INSERT INTO ?? (??) VALUES (?)";
      console.log(queryString);
      connection.query(queryString, [tableInput, colName, burgerName], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },

    //updateOne to change a burger from not eaten to devoured - changing boolean devoured from false to true 
    //UPDATE tableInput SET colName = true WHERE id = id
    updateOne: function(tableInput, colName, id) {
      var queryString = "UPDATE ?? SET ?? = true WHERE id = ?"
  
      connection.query(queryString,[tableInput, colName, id],function(err, result) {
          if (err) throw err;
          console.log(result);
        }
      );
    }
  };
  
  module.exports = orm;
  