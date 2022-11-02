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
      message: 'berhasil mendapatkan informasi user',
      user,
    });
  }

  return res.status(404).send({ message: 'user tidak ditemukan' });
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
    return res.send({
      message: 'avatar user berhasil diupdate',
      status: 200,
    });
  } catch (err) {
    return res.status(400).send({ message: 'gagal memperbarui ', status: 400 });
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
      message: 'password user berhasil diupdate',
      status: 200,
    });
  } catch (err) {
    return res.status(400).send({
      message: err.message || 'gagal memperbarui password ',
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
      message: 'activity timestamp user berhasil diupdate',
      status: 200,
    });
  } catch (err) {
    return res.status(400).send({
      message: 'gagal memperbarui activity timestamp ',
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
  const { name } = req.body;
  try {
    await userServices.updateUserInformation(id, name);
    return res.send({
      message: 'informasi user berhasil diupdate',
      status: 200,
    });
  } catch (err) {
    return res.status(400).send({ message: 'gagal memperbarui', status: 400 });
  }
}

module.exports = {
  getUserById,
  updateUserAvatar,
  updateUserInformation,
  updateUserPassword,
  updateUserActivity,
};
