const { allPostService } = require('../services/post.services');

const allPostController = async (req, res) => {
  const { type, message } = await allPostService();

  return res.status(type).json(message);
};

module.exports = {
  allPostController,
};