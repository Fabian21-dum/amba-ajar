const { model, Schema, SchemaTypes } = require('mongoose');

const userSchema = new Schema({
  id: { type: SchemaTypes.String, required: true },
  email: { type: SchemaTypes.String, required: true },
  password: { type: SchemaTypes.String, required: true },
  profile: {
    name: { type: SchemaTypes.String, required: true },
    avatar: { type: SchemaTypes.Buffer, required: false },
  },
  todoId: SchemaTypes.String,
  scheduleId: SchemaTypes.String,
  pomodoroCompletedCount: SchemaTypes.Number,
  todoCompleted: SchemaTypes.Number,
  scheduleCompleted: SchemaTypes.Number,
  activityTimestamps: [SchemaTypes.Number],
});

const User = model('User', userSchema);

module.exports = User;
