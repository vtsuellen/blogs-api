const statusCode = require('../utils/statusCode');

const loginMiddleware = (req, res, next) => {
  const { email, password } = req.body;
  if (email === '' || password === '') {
    return res.status(statusCode.BAD_REQUEST).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = {
  loginMiddleware,
};