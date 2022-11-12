const { Router } = require('express');
const todoController = require('../controllers/todoController');
const todoValidator = require('../middlewares/todoValidator');

const todoRoutes = Router();

todoRoutes.get('/:id', todoController.getTodos);
todoRoutes.post('/:id', todoValidator.createTodo, todoController.createTodo);
todoRoutes.put('/:id', todoValidator.updateTodo, todoController.updateTodoById);
todoRoutes.delete('/:id', todoValidator.deleteTodo, todoController.deleteTodoById);

module.exports = todoRoutes;
