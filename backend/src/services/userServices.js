const { User } = require('../models');
const { generateUID, encryptPassword, comparePassword } = require('../utils');

async function createUser(name, email, password) {
  const isEmailExist = await User.findOne({ email });
  if (isEmailExist) return false;

  const hashedPassword = encryptPassword(password);
  const id = generateUID();
  const todoId = generateUID('todo');
  const scheduleId = generateUID('schedule');
  const avatar = 'https://i.imgur.com/8Q9QY7C.png';

  const user = new User({
    id,
    email,
    password: hashedPassword,
    todoId,
    scheduleId,
    profile: { name, avatar },
    activityTimestamps: [0, 0, 0, 0, 0, 0, 0],
  });
  await user.save();
  return user;
}

async function getUserInformation(id) {
  const user = await User.findOne({ id });
  const { name, avatar } = user.profile;
  const { email } = user;
  console.log(user);
  return { email, name, avatar };
}

async function updateUserAvatar(id, avatarBuffer) {
  const user = await User.findOne({ id });
  user.profile = { ...user.profile, avatar: avatarBuffer };
  await user.save();
}

async function updateUserInformation(id, name) {
  const user = await User.findOne({ id });
  user.profile = { ...user.profile, name };
  await user.save();
}

async function updateUserPassword(id, oldPassword, newPassword) {
  const user = await User.findOne({ id });
  const isPasswordMatch = comparePassword(oldPassword, user.password);
  if (!isPasswordMatch) throw new Error('old password is not match');
  user.password = encryptPassword(newPassword);
  await user.save();
}

async function getUserActivityTimestamps(id) {
  const user = await User.findOne({ id });
  const currentDay = new Date().getDay();
  return user.activityTimestamps[currentDay];
}

async function updateUserActivityTimestamps(id, timestamp) {
  const user = await User.findOne({ id });
  const currentDay = new Date().getDay();
  user.activityTimestamps[currentDay] = timestamp;
  await user.save();
}

module.exports = {
  createUser,
  getUserInformation,
  getUserActivityTimestamps,
  updateUserAvatar,
  updateUserInformation,
  updateUserPassword,
  updateUserActivityTimestamps,
};
