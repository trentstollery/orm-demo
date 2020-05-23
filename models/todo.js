// Create a Todo model with columns for "text" (DataTypes.STRING), and "complete" (DataTypes.BOOLEAN).

module.exports = function(sequelize, DataTypes) { // exports class creates the model. Takes seralize which is link to libary and datatypes (list of types in database);
    var Todo = sequelize.define("Todo", { //declaring mdoel.  ToDo references the table.
      text: DataTypes.STRING,
      complete: DataTypes.BOOLEAN
    });
    return Todo;
  };
  