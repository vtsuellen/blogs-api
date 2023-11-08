const { CategoryService } = require('../services/category.services');

const categoryController = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await CategoryService({ name });

  return res.status(type).json(message);
};

module.exports = {
  categoryController,
};