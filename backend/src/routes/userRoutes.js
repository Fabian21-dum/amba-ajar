const { Router } = require('express');
const userController = require('../controllers/userController');

const userRoutes = Router();

userRoutes.get('/:id', userController.getUserById);
// userRoutes.put('/:id', userController.updateUserInformation);
userRoutes.put('/:id/avatar', userController.updateUserAvatar);
userRoutes.put('/:id/password', userController.updateUserPassword);
userRoutes.put('/:id/activity', userController.updateUserActivity);

module.exports = userRoutes;
