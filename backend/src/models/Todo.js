const { model, Schema, SchemaTypes } = require('mongoose');

const todoSchema = new Schema({
  id: SchemaTypes.String,
  todoList: [
    {
      todoId: SchemaTypes.String,
      title: SchemaTypes.String,
      isCompleted: SchemaTypes.Boolean,
      createAt: SchemaTypes.Number,
    },
  ],
});

const Todo = model('Todo', todoSchema);

module.exports = Todo;
