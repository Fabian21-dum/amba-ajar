const express = require('express');
const cors = require('cors');
const compression = require('compression');
const { bootstrap } = require('./models');
const routes = require('./routes');

function createServer() {
  const app = express();

  // use all the middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(compression());
  app.use(cors());
  app.use('/api', routes);
  app.all('*', (req, res) => res.status(404).send({ statusCode: 404, message: `${req.path} not found` }));

  return app;
}

async function startServer(PORT) {
  const app = createServer();
  const hostname = process.env.NODE_ENV !== 'prod' ? 'localhost' : '0.0.0.0';

  try {
    // connect to the database
    await bootstrap(process.env.MONGO_URI);
    console.log('+ Connected to the database');

    app.listen(PORT, hostname, () => {
      console.log(`+ Server listening on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}

module.exports = startServer;
