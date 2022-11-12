const { Router } = require('express');
const authController = require('../controllers/authController');
const authValidator = require('../middlewares/authValidator');

const authRoutes = Router();

authRoutes.post('/login', authValidator.login, authController.login);
authRoutes.post('/register', authValidator.register, authController.register);

module.exports = authRoutes;
