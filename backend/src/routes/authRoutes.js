const { Router } = require('express');
const authController = require('../controllers/authController');

const authRoutes = Router();

authRoutes.post('/login', authController.login);
authRoutes.post('/register', authController.register);

module.exports = authRoutes;
