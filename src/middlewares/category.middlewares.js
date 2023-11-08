const statusCode = require('../utils/statusCode');

const categoryMiddleware = (req, res, next) => {
  const { name } = req.body;

  if (!name || name === '') {
    return res.status(statusCode.BAD_REQUEST).json({ message: '"name" is required' });
  }
  next();
};

module.exports = {
  categoryMiddleware,
};