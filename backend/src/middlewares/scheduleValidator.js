const { check, validationResult, body } = require('express-validator');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
async function createSchedule(req, res, next) {
  await check('course', 'course is required').notEmpty().run(req);
  await check('mentor', 'mentor is required').notEmpty().run(req);
  await check('date', 'date is required').notEmpty().run(req);
  await check('duration', 'duration is required').isNumeric().run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return next();
}

async function updateSchedule(req, res, next) {
  await check('scheduleId', 'scheduleId is required').notEmpty().run(req);
  await check('changes', 'changes is required').notEmpty().run(req);
  await body('changes.course', 'course must be a string').optional().isString().run(req);
  await body('changes.mentor', 'mentor must be a string').optional().isString().run(req);
  await body('changes.date', 'date must be a string').optional().isString().run(req);
  await body('changes.duration', 'duration must be a number').optional().isNumeric().run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return next();
}

async function deleteSchedule(req, res, next) {
  await check('scheduleId', 'scheduleId is required').notEmpty().run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return next();
}

module.exports = {
  createSchedule,
  updateSchedule,
  deleteSchedule,
};
