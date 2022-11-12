const userServices = require('../services/userServices');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function getUserById(req, res) {
  const { id } = req.params;
  const user = await userServices.getUserInformation(id);

  if (user) {
    return res.send({
      message: 'successfully retrieved user information',
      user,
    });
  }

  return res.status(404).send({ status: 404, message: 'user not found' });
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function updateUserAvatar(req, res) {
  const { id } = req.params;
  const { avatarBuffer } = req.body;
  try {
    await userServices.updateUserAvatar(id, avatarBuffer);
    return res.send({ message: 'avatar successfully updated', status: 200 });
  } catch (err) {
    return res.status(400).send({ message: 'failed to update user avatar', status: 400 });
  }
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function updateUserPassword(req, res) {
  const { id } = req.params;
  const { oldPassword, newPassword } = req.body;

  try {
    await userServices.updateUserPassword(id, oldPassword, newPassword);
    return res.send({
      message: 'password successfully updated',
      status: 200,
    });
  } catch (err) {
    return res.status(400).send({
      message: err.message || 'failed to update user password',
      status: 400,
    });
  }
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function updateUserActivity(req, res) {
  const { id } = req.params;
  const { timestamp } = req.body;

  try {
    await userServices.updateUserActivityTimestamps(id, timestamp);
    return res.send({
      message: 'activity timestamp successfully updated',
      status: 200,
    });
  } catch (err) {
    return res.status(400).send({
      message: 'failed to update activity timestamp',
      status: 400,
    });
  }
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function updateUserInformation(req, res) {
  const { id } = req.params;
  const { changes } = req.body;
  try {
    await userServices.updateUserInformation(id, changes);
    return res.send({
      message: 'user information successfully updated',
      status: 200,
    });
  } catch (err) {
    return res.status(400).send({ message: 'failed to update user information', status: 400 });
  }
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function getUserActivity(req, res) {
  const { id } = req.params;

  try {
    const activities = await userServices.getUserActivityTimestamps(id);

    if (!activities) throw new Error('user activities not found');

    return res.send({
      message: 'successfully retrieved user activities',
      activities,
    });
  } catch (err) {
    return res.status(400).send({ message: err.message || 'failed to retrieve user activities' });
  }
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function getUserStats(req, res) {
  const { id } = req.params;
  try {
    const stats = await userServices.getUserStatsCount(id);
    return res.send({ message: 'successfully retrieved user stats', stats });
  } catch (err) {
    return res.status(400).send({ message: 'failed to retrieve user stats' });
  }
}

module.exports = {
  getUserById,
  getUserActivity,
  getUserStats,
  updateUserAvatar,
  updateUserInformation,
  updateUserPassword,
  updateUserActivity,
};
