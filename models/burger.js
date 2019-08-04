// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

//setting up object for all orm calls
var burger = {
    // Find all the burgers - only passing the tableInput parameter
    selectAll: orm.selectAll("burgers"),

    // Add a new burger to the db - need to figure out how to pull the new burger name from the html input to add it to the db
    insertOne: orm.insertOne("burgers", "burger_name", "new burger"),

    //Find burger by id and change devoured to true - need to figure out how to pull the id from the html input 
    updateOne: orm.updateOne("burgers", "devoured", "4")

}
// Export the database functions for the controller - controller.js will need these functions to create routes to get and post data based on interactions with html
module.exports = burger;
