/* eslint-disable consistent-return */
const { check, validationResult, body } = require('express-validator');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function createTodo(req, res, next) {
  await check('title', 'Title is required and must be a string').isString().run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function updateTodo(req, res, next) {
  await check('todoId', 'todoId is required').notEmpty().run(req);
  await check('changes', 'changes is required').isObject().run(req);
  await body('changes.title', 'title is required and must be a string').optional().isString().run(req);
  await body('changes.isCompleted', 'isCompleted is required and must be a boolean').optional().isBoolean().run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function deleteTodo(req, res, next) {
  await check('todoId', 'todoId is required').notEmpty().run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}

module.exports = {
  createTodo,
  updateTodo,
  deleteTodo,
};
