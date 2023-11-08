const { Category } = require('../models');
const statusCode = require('../utils/statusCode');

const CategoryService = async ({ name }) => {
  const categories = await Category.create({ name });

  return { type: statusCode.CREATED, message: categories };
};

const allCategoriesService = async () => {
  const categories = await Category.findAll();

  return { type: statusCode.OK, message: categories };
};

module.exports = {
  CategoryService,
  allCategoriesService,
};
