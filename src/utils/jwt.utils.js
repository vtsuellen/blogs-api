const jwt = require('jsonwebtoken');

const test = process.env.JWT_SECRET || 'suaSenhaSecreta';

const generateTokenUtils = (payload) => {
  const token = jwt.sign({ payload }, test);
  return token;
};

module.exports = {
  generateTokenUtils,
};
