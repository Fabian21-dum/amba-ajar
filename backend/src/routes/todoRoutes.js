const { Router } = require('express');
const todoController = require('../controllers/todoController');

const todoRoutes = Router();

todoRoutes.get('/', todoController.getTodos);
todoRoutes.post('/:id', todoController.createTodo);
todoRoutes.put('/:id', todoController.updateTodoById);
todoRoutes.delete('/:id', todoController.deleteTodoById);

module.exports = todoRoutes;
