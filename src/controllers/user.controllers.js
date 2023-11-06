const userServices = require('../services/user.services');
const statusCode = require('../utils/statusCode');

const userController = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const response = await userServices.userServices(displayName, email, password, image);
  if (response.type === statusCode.CREATED) {
    return res.status(response.type).json({ token: response.message });
  }
  return res.status(response.type).json({ message: response.message });
};

const allUserController = async (req, res) => {
  const { type, message } = await userServices.allUsersServices();

  return res.status(type).json(message);
};

module.exports = {
  userController,
  allUserController,
};