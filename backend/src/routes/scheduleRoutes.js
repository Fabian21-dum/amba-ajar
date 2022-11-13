const { Router } = require('express');
const scheduleController = require('../controllers/scheduleController');
const scheduleValidator = require('../middlewares/scheduleValidator');

const scheduleRoutes = Router();

scheduleRoutes.get('/:id', scheduleController.getAllSchedules);
scheduleRoutes.post('/:id', scheduleValidator.createSchedule, scheduleController.createSchedule);
scheduleRoutes.put('/:id', scheduleValidator.updateSchedule, scheduleController.updateSchedule);
scheduleRoutes.delete('/:id', scheduleValidator.deleteSchedule, scheduleController.deleteSchedule);

module.exports = scheduleRoutes;
