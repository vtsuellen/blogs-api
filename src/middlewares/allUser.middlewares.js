const jwt = require('jsonwebtoken');
const statusCode = require('../utils/statusCode');

const test = process.env.JWT_SECRET || 'suaSenhaSecreta';

const allUserMiddlewares = (req, res, next) => {
  const { authorization } = req.headers;
  
  if (!authorization || authorization === '') {
    return res.status(statusCode.UNAUTHORIZED).json({ message: 'Token not found' });
  }

  try {
    const token = authorization.split(' ')[1] || authorization.split(' ')[0];
    const user = jwt.verify(token, test);
    req.user = user;
    next();
  } catch (error) {
    return res.status(statusCode.UNAUTHORIZED).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  allUserMiddlewares,
};
