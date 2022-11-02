const { connect } = require('mongoose');
const User = require('./User');
const Todo = require('./Todo');
const Schedule = require('./Schedule');

async function bootstrap(MONGO_URI) {
  await connect(MONGO_URI, {
    retryWrites: true,
    w: 'majority',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

module.exports = {
  User,
  Todo,
  Schedule,
  bootstrap,
};
