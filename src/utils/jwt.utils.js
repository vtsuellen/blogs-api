const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const generateTokenUtils = (payload) => {
  const token = jwt.sign({ payload }, JWT_SECRET);
  return token;
};

const verifyTokenUtils = async (token) => {
  const payload = jwt.verify(token, JWT_SECRET);
  return payload;
};

module.exports = {
  generateTokenUtils,
  verifyTokenUtils,
};