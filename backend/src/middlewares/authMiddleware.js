const jwt = require('jsonwebtoken');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
function authMiddleware(req, res, next) {
  try {
    const auth = req.headers.authorization;
    if (!auth) throw new Error('unauthorized');

    const [authType, authToken] = auth.split(' ');
    if (authType !== 'Bearer' || !authToken) throw new Error('unauthorized');

    jwt.verify(authToken, process.env.JWT_SECRET);
    next();
  } catch (err) {
    res.status(401).send({ message: err.message || 'unauthorized', status: 401 });
  }
}

module.exports = authMiddleware;
