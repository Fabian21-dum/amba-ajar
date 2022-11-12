const { check, body, validationResult } = require('express-validator');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function updateAvatar(req, res, next) {
  await check('avatarBuffer').isBase64().run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return next();
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function updatePassword(req, res, next) {
  await check('newPassword', 'newPassword is required').isString().run(req);
  await check('oldPassword', 'oldPassword is required').isString().run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return next();
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function updateActivity(req, res, next) {
  await check('timestamp').isArray().run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return next();
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function updateInformation(req, res, next) {
  // changes validate
  await check('changes', 'changes object is required').isObject().run(req);
  await body('changes.name', 'name is required and must be a string').optional().isString().run(req);
  await body('changes.avatar', 'avatar is required and must be a string').optional().isString().run(req);
  await body('todoCount', 'todoCount is required and must be a number').optional().isInt().run(req);
  await body('scheduleCount', 'scheduleCount is required and must be a number').optional().isInt().run(req);
  await body('activityCount', 'activityCount is required and must be a number').optional().isInt().run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return next();
}

module.exports = {
  updateAvatar,
  updatePassword,
  updateActivity,
  updateInformation,
};
