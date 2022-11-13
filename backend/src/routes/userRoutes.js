const { Router } = require('express');
const userController = require('../controllers/userController');
const userValidator = require('../middlewares/userValidator');

const userRoutes = Router();

userRoutes.get('/:id', userController.getUserById);
userRoutes.get('/:id/activity', userController.getUserActivity);
userRoutes.put('/:id', userValidator.updateInformation, userController.updateUserInformation);
userRoutes.put('/:id/avatar', userValidator.updateAvatar, userController.updateUserAvatar);
userRoutes.put('/:id/password', userValidator.updatePassword, userController.updateUserPassword);
userRoutes.put('/:id/activity', userValidator.updateActivity, userController.updateUserActivity);

module.exports = userRoutes;
