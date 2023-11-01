const loginService = require('../services/login.services');

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const result = await loginService.loginService(email, password);
  res.status(result.type).json(result.message);
};

module.exports = {
  loginController,
};