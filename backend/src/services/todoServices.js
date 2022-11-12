const { Todo } = require('../models');
const { generateUID, generateTodoObject } = require('../utils');

async function createTodo(id, title) {
  const todo = await Todo.findOne({ id });
  const todoId = generateUID('todo');
  const todoObject = generateTodoObject(todoId, title);
  if (todo) {
    todo.todoList.push(todoObject);
    await todo.save();
    return todoId;
  }

  const newTodo = await Todo.create({ id, todoList: [todoObject] });
  await newTodo.save();
  return todoId;
}

async function getAllTodoListById(id) {
  const todo = await Todo.findOne({ id });
  if (!todo) return [];
  return todo.todoList;
}

async function updateTodoById(id, todoId, changes) {
  if (!changes) throw new Error('no changes provided');
  const { title, isCompleted } = changes;
  await Todo.updateOne(
    { id, 'todoList.todoId': todoId },
    {
      $set: { 'todoList.$.title': title, 'todoList.$.isCompleted': isCompleted },
    },
  );
}

async function deleteTodoById(id, todoId) {
  const todo = await Todo.findOne({ id });
  await todo.deleteOne({ todoList: { todoId } });
  await todo.save();
}

module.exports = {
  createTodo,
  getAllTodoListById,
  updateTodoById,
  deleteTodoById,
};
