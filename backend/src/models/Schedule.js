const { model, Schema, SchemaTypes } = require('mongoose');

const scheduleSchema = new Schema({
  id: SchemaTypes.String,
  timestamp: SchemaTypes.Number,
  class: SchemaTypes.String,
  teacher: SchemaTypes.String,
  duration: SchemaTypes.Number,
});

const Schedule = model('Schedule', scheduleSchema);

module.exports = Schedule;
