const { Todo } = require('../models');
const { generateUID } = require('../utils');

async function createTodo(id, title) {
  const todo = await Todo.findOne({ id });

  const todoId = generateUID();
  const createAt = new Date().toISOString();
  const isCompleted = false;

  if (todo) {
    todo.todoList.push({
      todoId,
      title,
      isCompleted,
      createAt,
    });
    await todo.save();
    return todoId;
  }

  await Todo.create({
    id,
    todoList: [
      {
        todoId,
        title,
        isCompleted,
        createAt,
      },
    ],
  });

  return todoId;
}

async function getAllTodoListById(id) {
  const todo = await Todo.findOne({ id });
  return todo.todoList;
}

async function updateTodoById(id, todoId, ...changes) {
  const todo = await Todo.findOne({ id });
  const todoIndex = todo.todoList.findIndex((item) => item.todoId === todoId);

  if (todoIndex) {
    todo.todoList[todoIndex] = { ...todo[todoIndex], ...changes };
    await todo.save();
  }
}

async function deleteTodoById(id, todoId) {
  const todo = await Todo.findOne({ id });
  const targetIndex = todo.todoList.findIndex((t) => t.todoId === todoId);
  todo.todoList.splice(targetIndex, 1);
  await todo.save();
}

module.exports = {
  createTodo,
  getAllTodoListById,
  updateTodoById,
  deleteTodoById,
};
