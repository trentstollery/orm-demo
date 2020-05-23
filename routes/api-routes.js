var db = require("../models");

module.exports = function (app) {

  app.get("/api/todos", function (req, res) {
    db.Todo.findAll({}).then(function (dbTodo) {
      res.json(dbTodo);
    });

  });

  app.post("/api/todos", function (req, res) {
    db.Todo.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function (dbTodo) {
      res.json(dbTodo);
    });
  });

  app.delete("/api/todos/:id", function (req, res) {
    db.Todo.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbTodo) {
        res.json(dbTodo);
      });
  });

  app.put("/api/todos", function (req, res) {
    db.Todo.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    })
      .then(function (dbTodo) {
        res.json(dbTodo);
      });
  });
};
