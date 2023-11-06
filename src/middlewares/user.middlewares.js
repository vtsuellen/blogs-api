const statusCode = require('../utils/statusCode');

const validateUser = (req, res, next) => {
  const { displayName, email, password } = req.body;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (displayName.length < 8) {
    return res
      .status(statusCode.BAD_REQUEST).json({
        message: '"displayName" length must be at least 8 characters long',
      });
  }
  if (password.length < 6) {
    return res
      .status(statusCode.BAD_REQUEST).json({
        message: '"password" length must be at least 6 characters long',
      });
  }
  if (!regex.test(email)) {
    return res.status(statusCode.BAD_REQUEST).json({ message: '"email" must be a valid email' });
  }
  next();
};

module.exports = {
  validateUser,
};
