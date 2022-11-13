const scheduleServices = require('../services/scheduleServices');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function createSchedule(req, res) {
  const { id } = req.params;
  // eslint-disable-next-line object-curly-newline
  const { course, mentor, date, duration } = req.body;
  try {
    const createdScheduleId = await scheduleServices.createSchedule(id, course, mentor, date, duration);
    return res.status(201).send({
      status: 201,
      message: 'successfully created schedule',
      scheduleId: createdScheduleId,
    });
  } catch (err) {
    return res.status(400).send({ message: 'failed to create schedule', status: 400 });
  }
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function getAllSchedules(req, res) {
  const { id } = req.params;
  try {
    const schedules = await scheduleServices.getAllSchedules(id);
    return res.send({
      status: 200,
      message: 'successfully retrieved schedules',
      schedules,
    });
  } catch (err) {
    return res.status(400).send({ message: 'failed to get schedules', status: 400 });
  }
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function updateSchedule(req, res) {
  const { id } = req.params;
  const { scheduleId, changes } = req.params;
  try {
    await scheduleServices.updateSchedule(id, scheduleId, changes);
    return res.send({ message: 'successfully updated schedule', status: 200 });
  } catch (err) {
    return res.status(400).send({ message: 'failed to update schedule', status: 400 });
  }
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function deleteSchedule(req, res) {
  const { id } = req.params;
  const { scheduleId } = req.params;
  try {
    await scheduleServices.deleteSchedule(id, scheduleId);
    return res.send({ message: 'successfully deleted schedule', status: 200 });
  } catch (err) {
    return res.status(400).send({ message: 'failed to delete schedule', status: 400 });
  }
}

module.exports = {
  createSchedule,
  getAllSchedules,
  updateSchedule,
  deleteSchedule,
};
