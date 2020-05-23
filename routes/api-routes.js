// var orm = require("../config/config.json");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function(req, res) {
    db.Todo.findAll({}).then ( function (results) {
      res.json(results);
    });
    // orm.getTodos(function(results) {
    //   res.json(results);
    // });
  });

  // POST route for saving a new todo. We can create a todo using the data on req.body
  app.post("/api/todos", function(req, res) {
    db.Todo.create({text: req.body.text, complete: req.body.complete}).then (function (results) {
      res.json(results);
    });
    
    // orm.addTodo(req.body, function(results) {
    //   res.json(results);
    // });
  });

  // DELETE route for deleting todos. We can access the ID of the todo to delete in
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {
    // orm.deleteTodo(req.params.id, function(results) {
    //   res.json(results);
    // });
  });

  // PUT route for updating todos. We can access the updated todo in req.body
  app.put("/api/todos", function(req, res) {
    // orm.editTodo(req.body, function(results) {
    //   res.json(results);
    // });
  });
};