const { Router } = require('express');
const scheduleController = require('../controllers/scheduleController');

const scheduleRoutes = Router();

scheduleRoutes.get('/:id', scheduleController.getAllSchedules);
scheduleRoutes.post('/:id', scheduleController.createSchedule);
scheduleRoutes.put('/:id', scheduleController.updateSchedule);
scheduleRoutes.delete('/:id', scheduleController.deleteSchedule);

module.exports = scheduleRoutes;
