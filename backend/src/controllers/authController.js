const { generateToken, authenticate } = require('../services/authServices');
const userServices = require('../services/userServices');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function login(req, res) {
  const { email, password } = req.body;

  const user = await authenticate(email, password);

  if (user) {
    const token = generateToken(user);
    return res.send({
      message: 'login berhasil',
      token,
    });
  }

  return res.status(401).send({ message: 'username atau password salah' });
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function register(req, res) {
  const { name, email, password } = req.body;

  const user = await userServices.createUser(name, email, password);

  if (user) {
    const token = generateToken(user);
    return res.status(201).send({
      message: 'register berhasil',
      userId: user.id,
      token,
    });
  }

  return res.status(400).send({ message: 'email sudah terdaftar', status: 400 });
}

module.exports = { login, register };
