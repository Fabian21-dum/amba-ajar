const uniqid = require('uniqid');
const bcrypt = require('bcrypt');

const generateUID = (type) => (type ? uniqid(`${type}-`) : uniqid());

const encryptPassword = (password) => bcrypt.hashSync(password, 12);

const comparePassword = (password, hashedPassword) => bcrypt.compareSync(password, hashedPassword);

const generateTodoObject = (todoId, title) => ({
  todoId,
  title,
  isCompleted: false,
  createAt: Date.now(),
});

const generateScheduleObject = (scheduleId, course, mentor, date, duration) => ({
  scheduleId,
  course,
  mentor,
  date,
  duration,
});

module.exports = {
  generateUID,
  encryptPassword,
  comparePassword,
  generateTodoObject,
  generateScheduleObject,
};
