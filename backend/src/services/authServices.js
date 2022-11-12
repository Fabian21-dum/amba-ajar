const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { comparePassword } = require('../utils');

function generateToken(payload) {
  const options = {
    expiresIn: 1000 * 60 * 60 * 24 * 7,
  };

  return jwt.sign(payload, process.env.JWT_SECRET, options);
}

async function authenticate(email, password) {
  const user = await User.findOne({ email });
  if (!user) return false;

  const { id, todoId, scheduleId } = user;
  const isPasswordMatch = comparePassword(password, user.password);
  if (user.email === email && isPasswordMatch) {
    return {
      id,
      email,
      todoId,
      scheduleId,
    };
  }
  return false;
}

module.exports = { generateToken, authenticate };
