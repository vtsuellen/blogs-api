const { Category } = require('../models');
const statusCode = require('../utils/statusCode');

const CategoryService = async ({ name }) => {
  const categories = await Category.create({ name });

  return { type: statusCode.CREATED, message: categories };
};

module.exports = {
  CategoryService,
};
