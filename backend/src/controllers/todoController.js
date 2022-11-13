const todoServices = require('../services/todoServices');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function getTodos(req, res) {
  const { id } = req.params;
  try {
    const todos = await todoServices.getAllTodoListById(id);
    return res.send({
      status: 200,
      message: 'successfully retrieved todos',
      todos,
    });
  } catch (err) {
    return res.status(400).send({ message: 'failed to get todo list', status: 400 });
  }
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function createTodo(req, res) {
  const { id } = req.params;
  const { title } = req.body;

  try {
    const todo = await todoServices.createTodo(id, title);
    return res.status(201).send({
      status: 201,
      message: 'successfully created todo',
      todo,
    });
  } catch (err) {
    return res.status(400).send({ message: 'failed to create todo', status: 400 });
  }
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function updateTodoById(req, res) {
  const { id } = req.params;
  // eslint-disable-next-line object-curly-newline
  const { todoId, changes } = req.body;
  try {
    await todoServices.updateTodoById(id, todoId, changes);
    return res.send({ message: 'successfully updated todo', status: 200 });
  } catch (err) {
    return res.status(400).send({ message: err.message || 'failed to update todo', status: 400 });
  }
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function deleteTodoById(req, res) {
  const { id } = req.params;
  const { todoId } = req.body;
  try {
    await todoServices.deleteTodoById(id, todoId);
    return res.send({ message: 'successfully deleted todo', status: 200 });
  } catch (err) {
    return res.status(400).send({ message: 'failed to delete todo', status: 400 });
  }
}

module.exports = {
  getTodos,
  createTodo,
  updateTodoById,
  deleteTodoById,
};
