const { Router } = require('express');
const authMiddleware = require('../middlewares/authMiddleware');

const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const todoRoutes = require('./todoRoutes');
const scheduleRoutes = require('./scheduleRoutes');

const rootRoutes = Router();

rootRoutes.use('/auth', authRoutes);
rootRoutes.use('/user', authMiddleware, userRoutes);
rootRoutes.use('/todo', authMiddleware, todoRoutes);
rootRoutes.use('/schedule', authMiddleware, scheduleRoutes);

module.exports = rootRoutes;
