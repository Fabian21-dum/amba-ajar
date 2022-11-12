const { model, Schema, SchemaTypes } = require('mongoose');

const scheduleSchema = new Schema({
  id: SchemaTypes.String,
  scheduleList: [
    {
      scheduleId: SchemaTypes.String,
      course: SchemaTypes.String,
      mentor: SchemaTypes.String,
      date: SchemaTypes.String,
      duration: SchemaTypes.String,
    },
  ],
});

const Schedule = model('Schedule', scheduleSchema);

module.exports = Schedule;
