const { User } = require('../models');
const { generateTokenUtils } = require('../utils/jwt.utils');
const statusCode = require('../utils/statusCode');

const loginService = async (email, password) => {
  const user = await User.findOne({
    where: { email, password },
    attributes: { exclude: ['password', 'email'] },
  });
  if (!user) {
    return { type: statusCode.BAD_REQUEST, message: { message: 'Invalid fields' } };
  }
  const { displayName, image, id } = user.dataValues;
  const token = generateTokenUtils({ displayName, image, id });
  return { type: statusCode.OK, message: { token } };
};

module.exports = {
  loginService,
};