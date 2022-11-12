const { Schedule } = require('../models');
const { generateUID, generateScheduleObject } = require('../utils');

async function createSchedule(id, course, mentor, date, duration) {
  const schedule = await Schedule.findOne({ id });
  const scheduleId = generateUID('schedule');
  const scheduleObject = generateScheduleObject(scheduleId, course, mentor, date, duration);

  if (schedule) {
    schedule.scheduleList.push(scheduleObject);
    await schedule.save();
    return scheduleId;
  }

  await Schedule.create({ id, scheduleList: [scheduleObject] });
  await schedule.save();
  return scheduleId;
}

async function getAllSchedules(id) {
  const schedule = await Schedule.findOne({ id });
  if (!schedule) return [];
  return schedule.scheduleList;
}

async function updateSchedule(id, scheduleId, changes) {
  if (!changes) throw new Error('no changes provided');
  // eslint-disable-next-line object-curly-newline
  const { course, mentor, date, duration } = changes;
  await Schedule.updateOne(
    { id, 'scheduleList.scheduleId': scheduleId },
    {
      $set: {
        'scheduleList.$.course': course,
        'scheduleList.$.mentor': mentor,
        'scheduleList.$.date': date,
        'scheduleList.$.duration': duration,
      },
    },
  );
}

async function deleteSchedule(id, scheduleId) {
  const schedule = await Schedule.findOne({ id });
  const newScheduleList = schedule.scheduleList.filter((s) => s.scheduleId !== scheduleId);
  schedule.scheduleList = newScheduleList;
  await schedule.save();
}

module.exports = {
  createSchedule,
  getAllSchedules,
  updateSchedule,
  deleteSchedule,
};
