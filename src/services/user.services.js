const { User } = require('../models');
const statusCode = require('../utils/statusCode');
const tokenUtils = require('../utils/jwt.utils');

const userServices = async (displayName, email, password, image) => {
  const response = await User.findOne({
    where: { email },
    attributes: { exclude: ['password', 'email'] },
  });

  if (response) {
    return { type: statusCode.CONFLICT, message: 'User already registered' };
  }

  const UserCreated = await User.create({ displayName, email, password, image });
  const { id } = UserCreated;
  const token = tokenUtils.generateTokenUtils({ id });
  return { type: statusCode.CREATED, message: token };
};

const allUsersServices = async () => {
  const response = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return { type: statusCode.OK, message: response };
};

const userByIdServices = async (id) => {
  const response = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });

  if (!response) {
    return { status: statusCode.NOT_FOUND, message: { message: 'User does not exist' },
    };
  }

  return { status: statusCode.OK, message: response };
};

module.exports = {
  userServices,
  allUsersServices,
  userByIdServices,
};