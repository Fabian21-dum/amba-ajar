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
      message: 'login success',
      token,
    });
  }

  return res.status(401).send({ message: 'email or password is incorrect' });
}

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function register(req, res) {
  const { name, email, password } = req.body;

  const user = await userServices.createUser(name, email, password);

  if (user) {
    // eslint-disable-next-line no-shadow, object-curly-newline
    const { id, email, todoId, scheduleId } = user;
    // eslint-disable-next-line object-curly-newline
    const payload = { id, email, todoId, scheduleId };

    const token = generateToken(payload);
    return res.status(201).send({
      message: 'register success',
      userId: user.id,
      token,
    });
  }

  return res.status(400).send({ message: 'email already exists', status: 400 });
}

module.exports = { login, register };
