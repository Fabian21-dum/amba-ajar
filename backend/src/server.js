const express = require('express');
const cors = require('cors');
const compression = require('compression');
const { bootstrap } = require('./models');
const routes = require('./routes');
// const authMiddleware = require('./middlewares/authMiddleware');

function createServer() {
  const app = express();

  // use all the middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(compression());
  app.use(cors());
  app.use('/api', routes);
  app.all('*', (req, res) => res.status(404).send({ statusCode: 404, message: `${req.path} tidak ditemukan` }));

  return app;
}

async function startServer(PORT) {
  const app = createServer();

  try {
    // connect to the database
    await bootstrap(process.env.MONGO_URI);
    console.log('+ Connected to the database');

    app.listen(PORT, () => {
      console.log(`+ Server listening on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}

module.exports = startServer;
